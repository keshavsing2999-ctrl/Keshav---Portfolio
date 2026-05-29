import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import type { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <footer id="contact" className="bg-[#0C0C0C] border-t border-[#1c1c1c] pt-20 pb-10 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <span className="hero-heading text-3xl font-black tracking-widest block">
            {profile.name.toUpperCase()}
          </span>
          <p className="text-gray-400 text-sm font-medium tracking-wide leading-relaxed max-w-xs">
            {profile.role}
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-mono pt-2">
            <MapPin size={14} className="text-purple-500/80" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-6">
          <h4 className="text-white text-sm font-mono tracking-widest uppercase font-bold">
            Navigate
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="space-y-6">
          <h4 className="text-white text-sm font-mono tracking-widest uppercase font-bold">
            Reach Out
          </h4>
          <div className="space-y-4">
            {/* Email copying */}
            {profile.social.email && (
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${profile.social.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-mono flex items-center gap-2"
                  >
                    <Mail size={14} className="text-purple-400" />
                    {profile.social.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-gray-800/60 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            )}

            {/* Phone */}
            {profile.social.phone && (
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Phone</span>
                <a
                  href={`tel:${profile.social.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-mono flex items-center gap-2"
                >
                  <Phone size={14} className="text-purple-400" />
                  {profile.social.phone}
                </a>
              </div>
            )}

            {/* Social pills row */}
            <div className="pt-2">
              <SocialLinks social={profile.social} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs font-mono text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs font-mono text-center sm:text-right">
          Designed & Built with <span className="text-pink-500/80">✦</span> AI
        </p>
      </div>
    </footer>
  );
};
