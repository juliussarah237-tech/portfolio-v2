// 02 — What I Do
// Three disciplines. One practice.
// Web Development • Data Analytics • Tech Education

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  BarChart3,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import { staggerContainer, staggerItem } from '../../animations/variants';

const cards = [
  {
    number: '',
    icon: Code2,
    title: 'Web Development',
    shortTitle: 'BUILD',
    description:
      'Responsive websites, interfaces, frontend development and digital experiences.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'WordPress', 'Next.js', 'Tailwind'],
  },
  {
    number: '',
    icon: BarChart3,
    title: 'Data Analytics',
    shortTitle: 'ANALYZE',
    description:
      'SQL, Python, Pandas, Excel, Power BI, Tableau, EDA and machine learning.',
    skills: ['Python', 'SQL', 'Power BI', 'Excel','Pandas', 'Tableau', 'EDA', 'ML'],
  },
  {
    number: '',
    icon: GraduationCap,
    title: 'Tech Education',
    shortTitle: 'TEACH',
    description:
      'Teaching Python, data analytics, web development and practical technology tricks and tipsthrough Code with JS.',
    skills: ['Python', 'Analytics', 'AI', 'Technology', 'Digital Solutions'],
  },
];

export default function WhatIDo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="what-i-do"
      className="relative overflow-hidden section-padding mesh-warm"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large red atmospheric glow */}
        <motion.div
          className="
            absolute
            -top-40
            left-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-accent/20
            blur-[120px]
          "
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Deep crimson glow */}
        <motion.div
          className="
            absolute
            top-[25%]
            right-[-120px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-crimson/30
            blur-[130px]
          "
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Small bright red light */}
        <motion.div
          className="
            absolute
            bottom-[5%]
            left-[40%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-accent-bright/10
            blur-[90px]
          "
          animate={{
            x: [0, 35, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Giant background typography */}
        <div
          className="
            absolute
            -right-10
            top-24
            font-display
            text-[10rem]
            sm:text-[15rem]
            lg:text-[20rem]
            font-bold
            leading-none
            tracking-[-0.08em]
            text-white/[0.025]
            select-none
          "
        >
          WORK
        </div>

        {/* Fine vertical red line */}
        <div
          className="
            absolute
            right-[12%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-accent/20
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative z-10 section-container">

        {/* Heading */}
        <SectionHeading
          eyebrow="What I Do"
          title="Three disciplines, one practice"
          subtitle="I don't just learn these skills — I build with them."
        />

        {/* =====================================================
            CARDS
            ===================================================== */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.15)}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
          "
        >
          {cards.map(
            ({
              number,
              icon: Icon,
              title,
              shortTitle,
              description,
              skills,
            }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/[0.09]
                  bg-black/35
                  backdrop-blur-xl
                  p-7
                  sm:p-8
                  transition-all
                  duration-500
                  hover:border-accent/50
                  hover:bg-black/50
                  hover:shadow-red
                "
              >
                {/* =================================================
                    CARD RED LIGHT
                    ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-accent/0
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:bg-accent/20
                  "
                />

                {/* =================================================
                    CARD TOP
                    ================================================= */}

                <div className="relative flex items-start justify-between mb-10">

                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-accent
                      to-accent-bright
                      text-white
                      shadow-red
                      transition-transform
                      duration-500
                      group-hover:rotate-3
                      group-hover:scale-110
                    "
                  >
                    <Icon size={23} strokeWidth={2} />

                    {/* tiny light */}
                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white
                        opacity-0
                        shadow-[0_0_12px_white]
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* Number */}
                  <div className="flex items-center gap-3">

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-accent-soft
                        opacity-0
                        translate-x-2
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    >
                      {shortTitle}
                    </span>

                    <span
                      className="
                        font-display
                        text-sm
                        font-semibold
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-accent-soft
                      "
                    >
                      {number}
                    </span>

                  </div>
                </div>

                {/* =================================================
                    TITLE
                    ================================================= */}

                <h3
                  className="
                    relative
                    font-display
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                    mb-4
                    transition-colors
                    duration-300
                    group-hover:text-accent-soft
                  "
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    text-sm
                    leading-7
                    text-muted
                    min-h-[84px]
                  "
                >
                  {description}
                </p>

                {/* =================================================
                    SKILLS
                    ================================================= */}

                <div
                  className="
                    relative
                    mt-7
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        px-3
                        py-1.5
                        text-[11px]
                        font-medium
                        text-white/55
                        transition-all
                        duration-300
                        group-hover:border-accent/20
                        group-hover:text-white/80
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* =================================================
                    BOTTOM LINE
                    ================================================= */}

                <div
                  className="
                    relative
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-accent/40
                      to-transparent
                    "
                  />

                  <div
                    className="
                      ml-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/30
                      transition-all
                      duration-300
                      group-hover:border-accent/50
                      group-hover:bg-accent
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                {/* =================================================
                    CARD EDGE
                    ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-transparent
                    via-accent
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </motion.div>
            )
          )}
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
            ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
            border-t
            border-white/[0.08]
            pt-6
          "
        >
          <p
            className="
              text-sm
              text-white/40
              max-w-xl
            "
          >
            From building interfaces to turning raw data into
            decisions — my work sits at the intersection of
            technology, analysis and education.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-accent-soft
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Building with technology
          </div>
        </motion.div>

      </div>
    </section>
  );
}