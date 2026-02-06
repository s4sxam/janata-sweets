
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <h2 className="text-3xl font-bold gold-gradient bg-clip-text text-transparent italic mb-6 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Bringing you the authentic taste of Bengal since {BUSINESS_INFO.foundingYear}. Every sweet tells a story of tradition, purity, and passion.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-saffron mr-4">📍</span>
                <p className="text-gray-300">{BUSINESS_INFO.location}</p>
              </div>
              <div className="flex items-center">
                <span className="text-saffron mr-4">📞</span>
                <p className="text-gray-300">{BUSINESS_INFO.phone}</p>
              </div>
              <div className="flex items-center">
                <span className="text-saffron mr-4">✉️</span>
                <p className="text-gray-300">contact@janatasweets.com</p>
              </div>
            </div>
          </div>

          <div className="reveal rounded-2xl overflow-hidden shadow-2xl h-[300px] border-4 border-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.832960682705!2d88.66539401503348!3d22.845879485040984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bc3700000001%3A0x86701c902c39d899!2sJanata%20Mistanna%20Bhandar!5e0!3m2!1sen!2sin!4v1622383829393!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Janata Mistanna Bhandar Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-sm text-gray-500">
          <p className="mb-2">© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <p>Designed by <span className="text-saffron font-bold">Premium Web Solutions</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
