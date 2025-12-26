import { Instagram } from 'lucide-react';

export function InstagramButton() {
  const instagramUrl = 'https://www.instagram.com/emd_servicos?igsh=MXFuZW4xb2thZTdlZg==';

  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 z-50 w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Seguir no Instagram"
    >
      <Instagram className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Siga-nos no Instagram
      </span>
    </a>
  );
}
