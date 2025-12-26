import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Paintbrush, Zap, Grid3x3, Home, Hammer, Droplet, Drone } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageCarousel } from './ImageCarousel';

// Imagens do projeto - Pintura
const paintImage1 = '/images/paint-1.jpg';
const paintImage2 = '/images/paint-2.jpg';
const paintImage3 = '/images/paint-3.jpg';

// Eletricidade
const electricImage1 = '/images/electric-1.jpg';
const electricImage2 = '/images/electric-2.jpg';
const electricImage3 = '/images/electric-3.jpg';

// Pavimento Flutuante
const flooringImage1 = '/images/flooring-1.jpg';
const flooringImage2 = '/images/flooring-2.jpg';
const flooringImage3 = '/images/flooring-3.jpg';

// Cozinha
const kitchenImage1 = '/images/kitchen-1.jpg';
const kitchenImage2 = '/images/kitchen-2.jpg';

// Remodelação
const renovationImage1 = '/images/renovation-1.jpg';
const renovationImage2 = '/images/renovation-2.jpg';
const renovationImage3 = '/images/renovation-3.jpg';

// Telhados
const roofImage1 = '/images/roof-1.jpg';

// Drone
const droneImage1 = '/images/drone-1.jpg';
const droneImage2 = '/images/drone-2.jpg';

const services = [
  {
    title: 'Pintura Interna e Externa de Moradias e Edifícios',
    description: 'Serviços profissionais de pintura com acabamentos perfeitos e tintas de alta qualidade.',
    images: [paintImage1, paintImage2, paintImage3],
    icon: Paintbrush,
    hasCarousel: true,
  },
  {
    title: 'Eletricidade',
    description: 'Instalações elétricas seguras e eficientes para toda a sua casa ou edifício.',
    images: [electricImage1, electricImage2, electricImage3],
    icon: Zap,
    hasCarousel: true,
  },
  {
    title: 'Instalação de Pavimento Flutuante',
    description: 'Instalação profissional de pavimentos modernos e duradouros com acabamento impecável.',
    images: [flooringImage1, flooringImage2, flooringImage3],
    icon: Grid3x3,
    hasCarousel: true,
  },
  {
    title: 'Montagem de Cozinhas',
    description: 'Instalação completa de cozinhas modernas com atenção aos detalhes e funcionalidade.',
    images: [kitchenImage1, kitchenImage2],
    icon: Home,
    hasCarousel: true,
  },
  {
    title: 'Remodelação Completa, Chave na Mão',
    description: 'Transformação total do seu espaço, cuidamos de tudo do início ao fim.',
    images: [renovationImage1, renovationImage2, renovationImage3],
    icon: Hammer,
    hasCarousel: true,
  },
  {
    title: 'Lavagem e Impermeabilização de Telhados',
    description: 'Limpeza profunda e proteção contra infiltrações para prolongar a vida do seu telhado.',
    images: [roofImage1],
    icon: Droplet,
    hasCarousel: true,
  },
  {
    title: 'Inspeções de Telhados e Estrutura com uso de Drones',
    description: 'Inspeção detalhada e segura com tecnologia de drones para diagnóstico preciso.',
    images: [droneImage1, droneImage2],
    icon: Drone,
    hasCarousel: true,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      {/* Grid pattern overlay - 3D Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:65px_65px] z-0" />
      
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Construction blocks floating */}
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-lg"
          style={{ top: '5%', right: '10%', transform: 'rotateX(45deg) rotateY(-45deg)' }}
          animate={{
            y: [0, -40, 0],
            rotateZ: [0, 15, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-32 h-32 border-2 border-amber-500/20 backdrop-blur-sm rounded-lg"
          style={{ bottom: '15%', left: '8%', transform: 'rotateX(-30deg) rotateY(30deg)' }}
          animate={{
            y: [0, 45, 0],
            rotateZ: [0, -20, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-gradient-to-br from-cyan-500/15 to-cyan-600/15 backdrop-blur-sm rounded-lg"
          style={{ top: '45%', left: '5%', transform: 'rotateX(60deg) rotateY(-45deg)' }}
          animate={{
            y: [0, -35, 0],
            rotateZ: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de construção e remodelação
            para transformar a sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 shadow-xl hover:shadow-2xl transition-all group bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  {service.hasCarousel ? (
                    <>
                      <ImageCarousel
                        images={service.images}
                        alt={service.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-4 left-4 text-white z-20 pointer-events-none">
                        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-2xl text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}