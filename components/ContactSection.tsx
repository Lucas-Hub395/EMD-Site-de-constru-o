import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Criar mensagem formatada
    const message = `📞 *Pedido de Orçamento Urgente*

👤 *Nome:* ${formData.name}
📱 *Telefone:* ${formData.phone}

🔔 Olá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA

_Enviado através do site EMD Serviços_`;

    // 1. Enviar para WhatsApp
    const whatsappNumber = '351914040103';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. Tentar abrir SMS (funciona no mobile)
    const smsMessage = `Pedido Orçamento EMD:\nNome: ${formData.name}\nTel: ${formData.phone}\n\nOlá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA`;
    const smsUrl = `sms:+351914040103?body=${encodeURIComponent(smsMessage)}`;
    
    // Detectar se é mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setTimeout(() => {
        window.location.href = smsUrl;
      }, 1000);
    }
    
    // 3. Preparar Email
    const emailSubject = `Pedido de Orçamento Urgente - ${formData.name}`;
    const emailBody = `Pedido de Orçamento recebido através do site EMD Serviços:

Nome: ${formData.name}
Telefone: ${formData.phone}

Mensagem: Olá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA

---
Enviado automaticamente pelo formulário de contacto EMD Serviços`;
    
    const emailUrl = `mailto:emdservicos2025@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir email após um delay
    setTimeout(() => {
      window.location.href = emailUrl;
    }, 2000);
    
    toast.success('Ligaremos em breve, obrigado!');
    
    setFormData({
      name: '',
      phone: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 backdrop-blur-sm relative overflow-hidden">
      {/* Grid pattern overlay - 3D Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:65px_65px] z-0" />
      
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Construction blocks floating */}
        <motion.div
          className="absolute w-44 h-44 bg-gradient-to-br from-cyan-500/12 to-cyan-600/12 backdrop-blur-sm rounded-lg"
          style={{ top: '8%', left: '12%', transform: 'rotateX(50deg) rotateY(50deg)' }}
          animate={{
            y: [0, -48, 0],
            rotateZ: [0, -22, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-38 h-38 border-2 border-amber-500/18 backdrop-blur-sm rounded-lg"
          style={{ bottom: '18%', left: '10%', transform: 'rotateX(-55deg) rotateY(-55deg)' }}
          animate={{
            y: [0, 52, 0],
            rotateZ: [0, 26, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-50 h-50 bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-lg"
          style={{ top: '40%', right: '8%', transform: 'rotateX(45deg) rotateY(-45deg)' }}
          animate={{
            y: [0, -44, 0],
            rotateZ: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Entre em Contacto
            </h2>
            <p className="text-xl text-gray-700">
              Estamos prontos para ajudar no seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário de Contato */}
            <Card className="shadow-2xl border-gray-200 bg-white">
              <CardHeader className="bg-cyan-600 text-white rounded-t-lg p-6">
                <CardTitle>Formulário de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="contact-name" className="text-gray-700 font-medium block">Nome *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 h-11"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contact-phone" className="text-gray-700 font-medium block">Telefone *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+351 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 h-11"
                    />
                  </div>
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                      size="lg"
                    >
                      Enviar Pedido de Contacto
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="shadow-2xl border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Telefone</h3>
                      <p className="text-gray-700">+351 914040103 </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Segunda a Sexta: 8h - 18h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">emdservicos2025@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Respondemos em 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Localização</h3>
                      <p className="text-gray-700">Lisboa, Portugal</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Atendemos toda a região de Lisboa e Arredores
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}