import React from 'react';
import { motion } from 'framer-motion';

export const BrandRibbon: React.FC = () => {
  const brands = [
    { name: 'AROME', logo: '/src/assets/img/arome_logo.png', isDarkBg: false },
    { name: 'CS Jewels', logo: '/src/assets/img/csjewels_logo.png', isDarkBg: false },
    { name: 'Solitario', logo: '/src/assets/img/solitario_logo.png', isDarkBg: true, customClass: 'bg-[#005e4b] rounded p-2.5' },
    { name: 'AeroMall Pune', logo: '/src/assets/img/aeromall_logo.png', isDarkBg: false },
  ];

  return (
    <section className="py-12 border-y border-[#1c1c1c] bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-500 font-mono text-xs uppercase tracking-widest mb-8">
          Gen AI Strategy & Campaigns For Premium Brands
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              whileHover={{ scale: 1.05 }}
              className="h-10 md:h-12 flex items-center justify-center filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
            >
              {brand.isDarkBg ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`h-full object-contain ${brand.customClass || ''}`}
                />
              ) : (
                <div className="bg-white rounded px-3 py-1.5 h-full flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-7 md:h-8 object-contain"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
