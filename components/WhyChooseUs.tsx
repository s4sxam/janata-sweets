
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="reveal bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-saffron group transform hover:-translate-y-2">
    <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-saffron/10 transition-colors">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="heritage" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-saffron font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4">The Trust Factor</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Why Habra Loves JMB</h3>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🥣" 
            title="100% Pure Ghee" 
            desc="We use only the finest ingredients. No compromise on quality, ever. The taste of purity in every bite."
          />
          <FeatureCard 
            icon="🏆" 
            title="50-Year Legacy" 
            desc="Serving Habra since 1968. Our recipes have been passed down through generations to maintain authenticity."
          />
          <FeatureCard 
            icon="☀️" 
            title="Fresh Daily" 
            desc="Every single item is made fresh every morning. We never sell leftovers, ensuring the best taste for you."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
