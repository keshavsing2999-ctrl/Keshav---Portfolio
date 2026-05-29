import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';
import type { Profile } from '../types/portfolio';

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-[#0C0C0C] flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      <div className="grid grid-cols-1 justify-items-center w-full max-w-6xl mx-auto px-6 relative">
        {/* Headline Row (Row 2) */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-heading select-none text-center col-start-1 row-start-1 tracking-tighter z-10 pointer-events-none"
          style={{
            fontSize: 'clamp(3rem, 13vw, 14rem)',
            whiteSpace: 'nowrap',
          }}
        >
          HI, I'M {profile.shortName.toUpperCase()}
        </motion.h1>

        {/* Avatar Row (Spans Rows 1 and 2, overlapping the headline) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          className="col-start-1 row-start-1 row-span-2 z-20 flex items-center justify-center pt-24 sm:pt-36 md:pt-48"
        >
          <div className="relative">
            {/* Soft decorative background glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 blur-2xl opacity-30 animate-pulse duration-4000"></div>
            <img
              src={profile.avatarImg}
              alt={profile.name}
              className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-black avatar-glow bg-black relative z-10"
            />
          </div>
        </motion.div>

        {/* Tagline and Socials Row (Row 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="col-start-1 row-start-3 text-center mt-12 md:mt-20 max-w-3xl flex flex-col items-center gap-6 z-30"
        >
          <div className="space-y-4">
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto px-4">
              {profile.tagline}
            </p>
            <p className="text-gray-500 font-mono text-sm tracking-wide">
              {profile.role} · {profile.location}
            </p>
          </div>
          <SocialLinks social={profile.social} className="mt-2" />
        </motion.div>
      </div>
    </section>
  );
};
