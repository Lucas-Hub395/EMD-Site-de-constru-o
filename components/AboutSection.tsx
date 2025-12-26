import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50/50 backdrop-blur-sm relative overflow-hidden">
      {/* Grid pattern overlay - 3D Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:65px_65px] z-0" />
      
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Construction blocks floating */}
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm rounded-lg"
          style={{ top: '20%', right: '5%', transform: 'rotateX(-50deg) rotateY(50deg)' }}
          animate={{
            y: [0, -45, 0],
            rotateZ: [0, -18, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-36 h-36 border-2 border-cyan-500/25 backdrop-blur-sm rounded-lg"
          style={{ bottom: '10%', right: '15%', transform: 'rotateX(40deg) rotateY(-40deg)' }}
          animate={{
            y: [0, 50, 0],
            rotateZ: [0, 22, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-44 h-44 bg-gradient-to-br from-amber-500/8 to-amber-600/8 backdrop-blur-sm rounded-lg"
          style={{ top: '50%', left: '3%', transform: 'rotateX(35deg) rotateY(35deg)' }}
          animate={{
            y: [0, -38, 0],
            rotateZ: [0, -16, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos a EMD Serviços, uma empresa voltada para a prestação de serviços de obra.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Empresa jovem, porém com muita experiência no ramo de atuação.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">
                    Profissionais Qualificados
                  </h3>
                  <p className="text-gray-600">
                   Nosso Objetivo: Entregar um trabalho com excelência superando a espectativa do nosso Cliente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">
                    Materiais de Qualidade
                  </h3>
                  <p className="text-gray-600">
                    Utilizamos apenas os melhores materiais do mercado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Garantia de Satisfação</h3>
                  <p className="text-gray-600">
                    Comprometemo-nos com a excelência em cada projeto
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-200">
              <div className="text-5xl text-cyan-600 mb-2">15+</div>
              <p className="text-gray-700">Anos de Experiência</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-200">
              <div className="text-5xl text-cyan-600 mb-2">200+</div>
              <p className="text-gray-700">Projetos Concluídos</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-200">
              <div className="text-5xl text-amber-500 mb-2">100%</div>
              <p className="text-gray-700">Clientes Satisfeitos</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-200">
              <div className="text-5xl text-amber-500 mb-2">24/7</div>
              <p className="text-gray-700">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}