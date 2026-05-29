import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Sort projects: highlights first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return 0;
  });

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
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">04 // PORTFOLIO</span>
        <h2 className="section-heading mt-2">PROJECTS</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {sortedProjects.map((project, idx) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} index={idx + 1} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
