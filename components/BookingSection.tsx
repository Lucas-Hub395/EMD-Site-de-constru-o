import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Formatar data para português
    const dateFormatted = new Date(formData.date + 'T00:00:00').toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    // Criar mensagem formatada
    const message = `📋 *Nova Marcação - EMD Serviços*

👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}
🔧 *Serviço:* ${formData.service}
📅 *Data:* ${dateFormatted}
⏰ *Horário:* ${formData.time}

_Enviado através do site EMD Serviços_`;

    // 1. Enviar para WhatsApp
    const whatsappNumber = '351914040103';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. Tentar abrir SMS (funciona no mobile)
    const smsMessage = `Nova Marcação EMD:\nNome: ${formData.name}\nTel: ${formData.phone}\nServiço: ${formData.service}\nData: ${dateFormatted}\nHorário: ${formData.time}`;
    const smsUrl = `sms:+351914040103?body=${encodeURIComponent(smsMessage)}`;
    
    // Detectar se é mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setTimeout(() => {
        window.location.href = smsUrl;
      }, 1000);
    }
    
    // 3. Preparar Email (sempre disponível como opção)
    const emailSubject = `Nova Marcação - ${formData.name}`;
    const emailBody = `Nova Marcação recebida através do site EMD Serviços:

Nome: ${formData.name}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Data: ${dateFormatted}
Horário: ${formData.time}

---
Enviado automaticamente pelo sistema de marcações EMD Serviços`;
    
    const emailUrl = `mailto:emdservicos2025@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir email após um delay (para não conflitar com WhatsApp)
    setTimeout(() => {
      window.location.href = emailUrl;
    }, 2000);
    
    toast.success('Redirecionando para WhatsApp, SMS e Email...');
    
    // Limpar formulário
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      service: '',
    });
  };

  return (
    <section id="booking" className="py-20 bg-white relative overflow-hidden">
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Construction blocks floating */}
        <motion.div
          className="absolute w-52 h-52 bg-gradient-to-br from-amber-500/12 to-amber-600/12 backdrop-blur-sm rounded-lg"
          style={{ top: '10%', left: '10%', transform: 'rotateX(55deg) rotateY(-55deg)' }}
          animate={{
            y: [0, -42, 0],
            rotateZ: [0, 20, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-40 h-40 border-2 border-cyan-500/20 backdrop-blur-sm rounded-lg"
          style={{ bottom: '12%', right: '8%', transform: 'rotateX(-45deg) rotateY(45deg)' }}
          animate={{
            y: [0, 48, 0],
            rotateZ: [0, -24, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-38 h-38 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm rounded-lg"
          style={{ top: '55%', right: '12%', transform: 'rotateX(50deg) rotateY(50deg)' }}
          animate={{
            y: [0, -40, 0],
            rotateZ: [0, 18, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:65px_65px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Agende Um Orçamento
            </h2>
            <p className="text-xl text-gray-700">
              Marque uma visita gratuita para avaliarmos o seu projeto
            </p>
          </div>

          <Card className="shadow-2xl border-gray-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-t-lg p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="w-6 h-6" />
                Sistema de Marcações
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-gray-700 font-medium block">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 h-11"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-gray-700 font-medium block">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+351 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 h-11"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="service" className="text-gray-700 font-medium block">Serviço Pretendido *</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-11 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-gray-900"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Pintura Interna e Externa de Moradias e Edifícios">Pintura Interna e Externa de Moradias e Edifícios</option>
                    <option value="Eletricidade">Eletricidade</option>
                    <option value="Instalação de Pavimento Flutuante">Instalação de Pavimento Flutuante</option>
                    <option value="Montagem de Cozinhas">Montagem de Cozinhas</option>
                    <option value="Remodelação Completa, Chave na Mão">Remodelação Completa, Chave na Mão</option>
                    <option value="Lavagem e Impermeabilização de Telhados">Lavagem e Impermeabilização de Telhados</option>
                    <option value="Inspeções de Telhados e Estrutura com uso de Drones">Inspeções de Telhados e Estrutura com uso de Drones</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="date" className="flex items-center gap-2 text-gray-700 font-medium">
                      <Calendar className="w-4 h-4" />
                      Data Preferencial *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="border-gray-300 bg-white text-gray-900 h-11"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="time" className="flex items-center gap-2 text-gray-700 font-medium">
                      <Clock className="w-4 h-4" />
                      Horário Preferencial *
                    </Label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full h-11 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-gray-900"
                    >
                      <option value="">Selecione o horário</option>
                      <option value="09:00 - 10:00">09:00 - 10:00</option>
                      <option value="10:00 - 11:00">10:00 - 11:00</option>
                      <option value="11:00 - 12:00">11:00 - 12:00</option>
                      <option value="14:00 - 15:00">14:00 - 15:00</option>
                      <option value="15:00 - 16:00">15:00 - 16:00</option>
                      <option value="16:00 - 17:00">16:00 - 17:00</option>
                      <option value="17:00 - 18:00">17:00 - 18:00</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                    size="lg"
                  >
                    Confirmar Marcação
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}