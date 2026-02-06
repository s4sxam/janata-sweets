
import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants';
import { GoogleGenAI } from "@google/genai";

const SmartMenuItemImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fallback images for a premium look if generation fails or key is missing
  const fallbackImages: Record<string, string> = {
    "Misti Doi": "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800",
    "Kaju Roll": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800"
  };

  useEffect(() => {
    if (src.startsWith('AI_GEN:')) {
      const generateImage = async () => {
        // Safety check for API key to prevent crashes in standalone environments
        if (!process.env.API_KEY) {
          console.warn(`API_KEY missing for ${alt}. Using high-quality fallback.`);
          setImageSrc(fallbackImages[alt] || fallbackImages["Misti Doi"]);
          return;
        }

        setLoading(true);
        try {
          const prompt = src.replace('AI_GEN:', '');
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [{ text: prompt }],
            },
            config: {
              imageConfig: {
                aspectRatio: "1:1"
              }
            }
          });

          let foundImage = false;
          const parts = response.candidates?.[0]?.content?.parts || [];
          for (const part of parts) {
            if (part.inlineData) {
              const base64Data = part.inlineData.data;
              setImageSrc(`data:image/png;base64,${base64Data}`);
              foundImage = true;
              break;
            }
          }
          if (!foundImage) throw new Error("No image part returned");
        } catch (err) {
          console.error("AI Image Generation failed:", err);
          setError(true);
          setImageSrc(fallbackImages[alt] || fallbackImages["Misti Doi"]);
        } finally {
          setLoading(false);
        }
      };
      generateImage();
    } else {
      setImageSrc(src);
    }
  }, [src, alt]);

  if (loading) {
    return (
      <div className="w-full h-full bg-gray-100 animate-pulse flex flex-col items-center justify-center space-y-3 p-4">
        <div className="text-saffron opacity-50">
          <svg className="w-10 h-10 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Generative AI</span>
          <span className="text-[9px] text-gray-300 italic uppercase">Developing Hero Shot...</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imageSrc || ''} 
      alt={alt} 
      className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
      loading="lazy"
    />
  );
};

const MenuGrid: React.FC = () => {
  const addToOrder = (name: string) => {
    // Elegant toast-like feedback could be added here later
    window.open(BUSINESS_INFO.whatsappLink + `%20${encodeURIComponent(name)}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-saffron font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4">Our Specialties</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">The Visual Menu</h3>
          <p className="text-gray-500 max-w-2xl mx-auto italic">Traditional craftsmanship meets modern presentation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="reveal group relative bg-cream rounded-3xl overflow-hidden shadow-xl border border-gold/5 transition-all hover:border-gold/30 hover:shadow-2xl">
              <div className="relative h-72 overflow-hidden bg-gray-50">
                <SmartMenuItemImage src={item.image} alt={item.name} />
                {item.tag && (
                  <span className="absolute top-5 left-5 bg-saffron text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10">
                    {item.tag}
                  </span>
                )}
                {item.image.startsWith('AI_GEN:') && (
                  <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md text-white/90 text-[7px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-sm z-10 border border-white/10">
                    AI Visualized
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold tracking-tight">{item.name}</h4>
                  <div className="flex flex-col items-end leading-tight">
                    <span className="text-saffron font-bold text-xl">₹{item.price}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">per {item.unit}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => addToOrder(item.name)}
                  className="w-full mt-2 bg-white hover:bg-saffron hover:text-white text-saffron border-2 border-saffron/20 hover:border-saffron font-bold py-3 rounded-2xl transition-all duration-500 shimmer-btn uppercase text-[11px] tracking-[0.2em]"
                >
                  Quick Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center reveal">
          <p className="text-gray-400 mb-6 text-sm">Custom catering and bulk corporate gifting available.</p>
          <a href={BUSINESS_INFO.whatsappLink} className="inline-flex items-center text-saffron font-bold border-b border-saffron/30 pb-1 hover:border-saffron transition-all group">
            Consult our Sweet Specialist 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MenuGrid;
