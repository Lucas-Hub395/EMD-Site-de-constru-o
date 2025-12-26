import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { InstagramButton } from './components/InstagramButton';

export default function App() {
  useEffect(() => {
    // SEO: Adicionar tags estruturadas dinamicamente
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "EMD Serviços",
      "url": "https://emdservicos.pt",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://emdservicos.pt/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(schemaScript);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/50">
      <Header />
      <Hero />
      <Services />
      <AboutSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
}