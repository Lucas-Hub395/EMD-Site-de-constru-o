import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

// Imagens do projeto
const logo = '/images/emd-logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Grid pattern overlay - 3D Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:65px_65px] opacity-30 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="px-[2px] py-[0px] mx-[-23px] my-[0px]">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="EMD Serviços" className="h-12 w-12 object-contain" />
              <span className="text-xl">EMD Serviços</span>
            </div>
            <p className="text-gray-400">
              Transformando espaços com qualidade e profissionalismo desde 2008.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Nossos Trabalhos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Pintura Interna e Externa de Moradias e Edificios</li>
              <li>Eletricidade</li>
              <li>Instalação de Pavimento Flutuante</li>
              <li>Montagem de Cozinhas</li>
              <li>Remodelação Completa, chave na Mão</li>
              <li>Lavagem e Impermeabilização de Telhados</li>
              <li>Inspeçoes de Telhadose Estrutura com uso de Drones</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Marcações
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +351 914040103
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                emdservicos2025@gmail.com
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/emd_servicos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EMD Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}