
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import MenuGrid from './components/MenuGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-200">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <MenuGrid />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
