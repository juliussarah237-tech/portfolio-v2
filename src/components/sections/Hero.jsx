// 01 — Hero, matching the reference design: "Hey, I'm [Name]" intro, bold
// oversized name, a photo/video of the person that STAYS PINNED (sticky) on
// the right while content scrolls past it, with a scroll-linked parallax
// drift so it feels alive — plus a sliding role rotator ("Web Developer." →
// "Data Analyst." → "Tech Educator.") like the reference site's tagline.
//
// IMAGE IMPORT NOTE: the photo is imported as a module below (not a raw
// string path) — this is required in Vite so the image actually gets
// bundled into the production build, not just the dev server. If your file
// has a different name/extension than hero-photo.jpg, update the import line.
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants';
import heroPhoto from '../../assets/images/hero-photo.jpg';

const skills = [
  { number: '01', label: 'Web Development' },
  { number: '02', label: 'Data Analytics' },
  {number: '03' , label: 'Social Media Manager'},
  { number: '04', label: 'Tech Education' },
];

const roles = ['Web Developer.', 'Data Analyst.', 'Social Media Manager', 'Tech Educator.'];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="block text-accent-soft"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 glow-backdrop" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12, 0.1)}
          >
            <motion.p variants={fadeUp} className="text-muted text-base sm:text-lg mb-2">
              Hey, I'm
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-ink"
            >
              Anuniro
              <br />
              Ugochi Sarah
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-10 max-w-xl">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-snug">
                <RoleRotator />
              </h2>
              <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
                I build interfaces, turn raw data into decisions, and teach
                practical technology through{' '}
                <span className="text-accent-soft">Code with JS</span>.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1)}
              className="mt-14 pt-10 border-t border-border grid grid-cols-2 gap-8"
            >
              {skills.map(({ number, label }) => (
                <motion.div key={number} variants={staggerItem}>
                  <span className="text-accent text-sm font-semibold">{number}</span>
                  <p className="mt-2 text-sm sm:text-base text-ink font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ y: photoY, scale: photoScale }}
              className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden"
            >
              <img
                src={heroPhoto}
                alt="Anuniro Ugochi Sarah"
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-bg/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}