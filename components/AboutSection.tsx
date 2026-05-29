import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  bio: string;
  yearsOfExperience: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ bio, yearsOfExperience }) => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start"
      >
        {/* Left Side: Chrome gradient title + Experience Count */}
        <div className="flex flex-col gap-6 border-l-2 border-gradient-to-b from-purple-500 via-pink-500 to-orange-500 pl-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">01 // INTRODUCTION</span>
            <h2 className="section-heading mt-2">ABOUT ME</h2>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="accent-gradient-text text-6xl font-black">{yearsOfExperience}</span>
            <span className="text-gray-400 text-sm tracking-wider uppercase font-mono">Years of<br />Experience</span>
          </div>
        </div>

        {/* Right Side: Bio paragraph */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed no-word-break font-light">
            {bio}
          </p>
          <div className="h-px w-full bg-gradient-to-r from-[#2a2a2a] via-[#141414] to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};
