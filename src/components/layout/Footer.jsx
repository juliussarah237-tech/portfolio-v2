// Footer — mirrors Contact section socials + copyright line.
import { Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react';
import TikTokIcon from '../common/TikTokIcon';
import { socials } from '../../data/socials';

const links = [
  { href: `mailto:${socials.email}`, icon: Mail, label: 'Email' },
  { href: socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: socials.github, icon: Github, label: 'GitHub' },
  { href: socials.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
  { href: socials.instagram, icon: Instagram, label: 'Instagram' },
  { href: socials.tiktok, icon: TikTokIcon, label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Anuniro Ugochi Sarah. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent-soft transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}