import React from 'react';
import { motion } from 'framer-motion';
import type { Skills } from '../types/portfolio';

interface ServicesSectionProps {
  skills: Skills;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ skills }) => {
  const serviceCategories = [
    {
      title: 'Generative AI & Prompt Engineering',
      description: 'Designing AI-driven workflows, optimizing prompt engineering for LLMs, and building robust research systems that automate complex corporate operations.',
      categoryKey: 'Generative AI',
    },
    {
      title: 'AI Video & Creative Production',
      description: 'Directing cinematic, social-first visual campaigns. Constructing end-to-end creative pipelines using Google Flow, Higgsfield, and advanced image generation tools.',
      categoryKey: 'AI Video & Creative Production',
    },
    {
      title: 'Strategy & Brand Storytelling',
      description: 'Crafting brand positioning, scaling content operations, and executing LinkedIn growth campaigns for thought leaders and retail destinations.',
      categoryKey: 'Strategy & Marketing',
    },
    {
      title: 'Analytics & Business Intelligence',
      description: 'Conducting market research and competitor analysis. Transforming business data into strategic plans with PowerPoint, Power BI, and Excel.',
      categoryKey: 'Analytics & Business',
    },
  ];

  const formatNumber = (index: number) => {
    return (index + 1).toString().padStart(2, '0');
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">03 // CAPABILITIES</span>
        <h2 className="section-heading mt-2">SERVICES & SKILLS</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {serviceCategories.map((service, idx) => {
          // Find matching skills category
          const skillCat = skills.categories.find(
            (c) => c.name.toLowerCase() === service.categoryKey.toLowerCase()
          );
          const skillList = skillCat ? skillCat.items : [];

          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 flex flex-col justify-between card-hover-glow transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Number and Title */}
                <div className="flex items-center justify-between">
                  <span className="accent-gradient-text text-3xl font-black font-mono group-hover:scale-105 transition-transform duration-300">
                    {formatNumber(idx)}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-600 group-hover:border-purple-500 group-hover:text-purple-400 transition-colors duration-300 text-xs">
                    ✦
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight pt-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Skills tags */}
              {skillList.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-800/60">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-mono block mb-3">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#0c0c0c] border border-gray-800/80 text-gray-400 text-xs font-mono px-2.5 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
