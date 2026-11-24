// 09 — Contact: "Have a project, opportunity or idea? Let's build something useful."
// Email, LinkedIn, GitHub, WhatsApp, Instagram, TikTok links.
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';
import TikTokIcon from '../common/TikTokIcon';
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants';
import { socials } from '../../data/socials';

const links = [
  { href: `mailto:${socials.email}`, icon: Mail, label: 'Email' },
  { href: socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: socials.github, icon: Github, label: 'GitHub' },
  { href: socials.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
  { href: socials.instagram, icon: Instagram, label: 'Instagram' },
  { href: socials.tiktok, icon: TikTokIcon, label: 'TikTok' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="relative section-padding mesh-deep">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.12)}
          className="max-w-xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl font-semibold text-ink"
          >
            Have a project, opportunity or idea?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted text-base sm:text-lg">
            Let's build something useful.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.08)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {links.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-6 py-3 text-sm font-medium text-ink hover:border-accent-soft hover:text-accent-soft transition-colors"
              >
                <Icon size={18} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}