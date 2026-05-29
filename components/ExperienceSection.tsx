import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../types/portfolio';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const formatNumber = (index: number) => {
    return (index + 1).toString().padStart(2, '0');
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">02 // HISTORY</span>
        <h2 className="section-heading mt-2">EXPERIENCE</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col gap-12"
      >
        {experience.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${idx}`}
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
          >
            {/* Number indicator */}
            <div className="flex-shrink-0 flex items-center md:items-start gap-4">
              <span className="accent-gradient-text text-4xl md:text-5xl font-black leading-none">
                {formatNumber(idx)}
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-[#2a2a2a] to-transparent md:hidden"></div>
            </div>

            {/* Content box */}
            <div className="flex-grow space-y-4">
              {/* Header: Title, company, time, location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-gray-400 font-medium tracking-wide">
                    {exp.company}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-[#141414] border border-[#2a2a2a] text-gray-400 font-mono text-xs px-3 py-1.5 rounded-full select-none">
                    {exp.period}
                  </span>
                  <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-400 font-light text-base leading-relaxed">
                {exp.summary}
              </p>

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-2 mt-4 pl-1">
                  {exp.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base font-light leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Visual Divider (unless last entry) */}
              {idx < experience.length - 1 && (
                <div className="pt-8">
                  <div className="h-px bg-gradient-to-r from-[#2a2a2a] via-[#141414] to-transparent w-full"></div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
