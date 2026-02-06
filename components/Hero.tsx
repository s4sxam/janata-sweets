
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Slow Zoom Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&q=80&w=1920" 
          alt="Janata Sweets Banner" 
          className="w-full h-full object-cover opacity-60 scale-100 animate-[zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="reveal active">
          <h2 className="text-saffron font-bold text-lg md:text-2xl mb-4 tracking-widest uppercase italic">
            {BUSINESS_INFO.tagline}
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            The Taste of <span className="text-[#F9E076]">Tradition</span> in Every Bite.
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200 font-light tracking-wide max-w-2xl mx-auto">
            Rated <span className="text-saffron font-bold">{BUSINESS_INFO.rating}</span> by {BUSINESS_INFO.customerCount} Happy Customers in Habra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={BUSINESS_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="shimmer-btn flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </a>
            <a 
              href="#menu" 
              className="px-8 py-4 rounded-full border-2 border-gold font-bold text-lg hover:bg-gold/10 transition-all transform hover:scale-105 text-[#F9E076]"
              style={{ borderColor: '#D4AF37' }}
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
