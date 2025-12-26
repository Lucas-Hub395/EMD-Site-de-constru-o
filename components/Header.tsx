import { Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

// Imagens do projeto
const logo = '/images/emd-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 bg-[rgb(0,102,255)] overflow-hidden">
      <nav className="mx-auto relative">
        <motion.div 
          className="flex items-center justify-between bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 px-8 py-6 rounded-2xl shadow-2xl relative z-10"
          initial={{ rotateX: 0, scale: 1 }}
          whileHover={{ 
            rotateX: 5,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.5)",
            transition: { 
              duration: 0.3,
              type: "spring",
              stiffness: 300
            }
          }}
          animate={{
            y: [0, -2, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          <div className="flex items-center gap-3">
            <motion.img 
              src={logo} 
              alt="EMD Serviços" 
              className="h-14 w-14 object-contain rounded-xl shadow-lg" 
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            />
            <motion.span 
              className="text-4xl text-gray-900"
              whileHover={{
                scale: 1.05,
                color: "#0e7490",
                textShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                transition: { duration: 0.2 }
              }}
            >
              EMD Serviços
            </motion.span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <motion.button
              onClick={() => scrollToSection('services')}
              className="text-gray-800 hover:text-cyan-600 transition-colors relative group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-xl">Serviços</span>
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-cyan-600 transition-colors relative group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-xl">Quem Somos</span>
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('booking')}
              className="text-gray-800 hover:text-cyan-600 transition-colors relative group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-xl">Marcações</span>
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
            <motion.a
              href="https://instagram.com/emd_servicos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-cyan-600 transition-colors flex items-center gap-2 relative group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-xl">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.div>
                Instagram
              </span>
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-600 hover:bg-cyan-700 rounded-xl text-lg px-6 py-5 shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Contacto
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-cyan-600 transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-cyan-600 transition-colors text-left"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-600 hover:text-cyan-600 transition-colors text-left"
            >
              Marcações
            </button>
            <a
              href="https://instagram.com/emd_servicos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-600 transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-600 hover:bg-cyan-700 w-full"
            >
              Contacto
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}