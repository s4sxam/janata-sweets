
import React from 'react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-saffron/5 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/5 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-saffron font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4">Owner's Pride</h2>
          <h3 className="text-4xl md:text-5xl font-bold">What Habra Says About Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="reveal bg-white p-8 rounded-3xl shadow-xl border-t-4 border-gold relative">
              <div className="text-gold text-4xl mb-4 font-serif">"</div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center font-bold text-saffron mr-4 border border-saffron/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{review.name}</h5>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
