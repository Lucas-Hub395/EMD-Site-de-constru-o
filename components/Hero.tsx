import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';

// Imagens do projeto
const newLogo = '/images/emd-logo.png';
const paintImage1 = '/images/paint-1.jpg';
const electricImage1 = '/images/electric-1.jpg';
const flooringImage1 = '/images/flooring-1.jpg';
const kitchenImage1 = '/images/kitchen-1.jpg';
const renovationImage1 = '/images/renovation-1.jpg';
const roofImage1 = '/images/roof-1.jpg';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden rounded-3xl min-h-[700px] shadow-xl">
        {/* Grid pattern overlay - 3D Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:65px_65px] z-0" />
        
        {/* Animated 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Construction blocks floating */}
          <motion.div
            className="absolute w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-lg"
            style={{ top: '10%', left: '10%', transform: 'rotateX(45deg) rotateY(45deg)' }}
            animate={{
              y: [0, -30, 0],
              rotateZ: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-24 h-24 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-lg"
            style={{ top: '60%', right: '15%', transform: 'rotateX(-45deg) rotateY(45deg)' }}
            animate={{
              y: [0, 40, 0],
              rotateZ: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-40 h-40 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-lg"
            style={{ bottom: '20%', left: '5%', transform: 'rotateX(30deg) rotateY(-30deg)' }}
            animate={{
              y: [0, -50, 0],
              rotateZ: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-28 h-28 border-2 border-cyan-500/30 backdrop-blur-sm rounded-lg"
            style={{ top: '30%', right: '8%', transform: 'rotateX(60deg) rotateY(-60deg)' }}
            animate={{
              y: [0, 35, 0],
              rotateZ: [0, -25, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid de Fotos de Fundo - MAIS VISÍVEIS */}
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-8 opacity-90">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={electricImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={flooringImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={paintImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={kitchenImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden h-full flex items-center justify-center">
            {/* Espaço para o logo central */}
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={renovationImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={roofImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={electricImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={kitchenImage1} alt="" className="w-full h-48 object-cover brightness-100 contrast-100" />
          </div>
        </div>

        {/* Conteúdo Central */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] text-center">
          {/* Logo Central com Animação 3D Profissional */}
          <motion.div
            initial={{ scale: 0, rotateY: -180, opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotateY: 0, 
              opacity: 1,
            }}
            transition={{ 
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <motion.div 
              className="relative"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0],
                y: [0, -8, 0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ perspective: 1000 }}
            >
              {/* Glow animado */}
              <motion.div 
                className="absolute inset-0 bg-cyan-400 rounded-lg blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Logo ajustado para cobrir todo o espaço em branco */}
              <div className="relative w-80 h-80 md:w-96 md:h-50 rounded-lg shadow-2xl shadow-cyan-500/40 flex items-center justify-center bg-white mb-4 mt-[36px] pt-2">
                <img 
                  src={newLogo} 
                  alt="EMD Serviços" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Botões de Ação com Animação Flutuante */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0, -8, 0],
              rotateY: [0, 3, 0, -3, 0],
            }}
            transition={{ 
              opacity: { delay: 0.5, duration: 0.6 },
              y: { 
                delay: 0.5,
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateY: {
                delay: 0.5,
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            style={{ perspective: 1000 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-[24px]"
            >
              Agendar Serviço
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-amber-500 text-[rgb(0,83,225)] hover:bg-amber-500 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-[rgb(213,176,53)] text-[24px]"
            >
              Ver Serviços
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}