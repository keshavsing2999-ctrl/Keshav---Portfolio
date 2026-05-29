import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, Globe } from 'lucide-react';
import type { Social } from '../types/portfolio';

interface SocialLinksProps {
  social: Social;
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ social, className = '' }) => {
  const links = [
    { key: 'github', value: social.github, icon: Github, label: 'GitHub', url: social.github },
    { key: 'linkedin', value: social.linkedin, icon: Linkedin, label: 'LinkedIn', url: social.linkedin.startsWith('http') ? social.linkedin : `https://${social.linkedin}` },
    { key: 'instagram', value: social.instagram, icon: Instagram, label: 'Instagram', url: social.instagram.startsWith('http') ? social.instagram : `https://${social.instagram}` },
    { key: 'email', value: social.email, icon: Mail, label: 'Email', url: `mailto:${social.email}` },
    { key: 'phone', value: social.phone, icon: Phone, label: 'Phone', url: `tel:${social.phone}` },
    { key: 'website', value: social.website, icon: Globe, label: 'Website', url: social.website.startsWith('http') ? social.website : `https://${social.website}` },
  ];

  const activeLinks = links.filter((link) => link.value && link.value.trim() !== '');

  if (activeLinks.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {activeLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.key}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-400 hover:text-white transition-all duration-300 card-hover-glow hover:scale-105"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
};
