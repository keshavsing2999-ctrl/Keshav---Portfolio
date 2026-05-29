import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../types/portfolio';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  // Duplicate testimonials twice for a seamless infinite loop marquee effect
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-[#1c1c1c] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">05 // FEEDBACK</span>
        <h2 className="section-heading mt-2">TESTIMONIALS</h2>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="w-full relative flex items-center py-4">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-track flex gap-6">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 w-[300px] sm:w-[350px] flex-shrink-0 flex flex-col justify-between select-none relative card-hover-glow transition-all duration-300"
            >
              {/* Decorative Quote icon in corner */}
              <div className="absolute top-6 right-6 text-purple-500/10 pointer-events-none">
                <Quote size={48} />
              </div>

              {/* Quote text */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed italic relative z-10">
                "{item.quote}"
              </p>

              {/* Bio info */}
              <div className="flex items-center gap-3.5 mt-6 pt-6 border-t border-gray-800/60 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-mono text-sm uppercase flex-shrink-0"
                  style={{ backgroundColor: item.avatarColor || '#a855f7' }}
                >
                  {item.name ? item.name.charAt(0) : 'U'}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold tracking-wider text-white uppercase truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
