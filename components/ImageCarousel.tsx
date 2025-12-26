import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden group">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`${alt} - ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Sempre visíveis no mobile, hover no desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cyan-600/80 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-all shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cyan-600/80 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-all shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-15 flex justify-center items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'w-6 h-2 bg-cyan-500'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            } rounded-full`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}