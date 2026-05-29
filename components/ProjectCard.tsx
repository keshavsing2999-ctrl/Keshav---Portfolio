import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  const hasLink = project.link && project.link.trim() !== '';
  const imageList = project.images || (project.image ? [project.image] : []);
  const hasMultipleImages = imageList.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-[#141414] border border-[#2a2a2a] rounded-2xl overflow-hidden flex flex-col justify-between card-hover-glow transition-all duration-300 relative group h-full"
    >
      <div>
        {/* Project Image or Fallback */}
        <div className="h-56 md:h-64 relative w-full overflow-hidden bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border-b border-gray-800/80 flex items-center justify-center select-none">
          {imageList.length > 0 ? (
            <div className="w-full h-full relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  src={imageList[currentIdx]}
                  alt={`${project.title} - ${currentIdx + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-full object-cover ${
                    imageList[currentIdx].includes('logo.png')
                      ? imageList[currentIdx].includes('solitario')
                        ? 'p-10 bg-[#005e4b] object-contain'
                        : 'p-10 bg-white object-contain'
                      : ''
                  }`}
                />
              </AnimatePresence>

              {/* Slider Controls */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-gray-800 text-gray-400 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-gray-800 text-gray-400 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>

                  {/* Bullet Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {imageList.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setCurrentIdx(dotIdx);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          currentIdx === dotIdx ? 'bg-purple-500 w-3' : 'bg-white/40'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            // Premium fallback placeholder
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
              <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent opacity-50"></div>
              <span className="accent-gradient-text text-8xl font-black opacity-5 font-mono">
                {formatNumber(index)}
              </span>
              <span className="text-gray-500 text-xs font-mono tracking-widest uppercase mt-2">
                PROJECT WORK
              </span>
            </div>
          )}
          
          {/* Top overlay badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-20">
            <span className="bg-black/70 backdrop-blur-md text-gray-400 font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded border border-gray-800">
              {project.year}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            {!hasLink && (
              <span className="bg-black/70 backdrop-blur-md text-orange-400/90 font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded border border-orange-500/20 flex items-center gap-1.5">
                <Lock size={10} /> Confidential
              </span>
            )}
          </div>
        </div>

        {/* Text Area */}
        <div className="p-6 md:p-8 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
              {formatNumber(index)} // {project.role}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm font-medium italic">
              {project.subtitle}
            </p>
          </div>

          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tech Stack + Call to Action footer */}
      <div className="p-6 md:px-8 md:pb-8 pt-0 space-y-6">
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-purple-500/5 border border-purple-500/15 text-purple-300/90 text-[10px] font-mono px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {hasLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 accent-gradient-bg text-white font-semibold text-sm px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            LIVE PROJECT <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};
