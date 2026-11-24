// 03 — Data Analytics
// Turning raw data into decisions.
// RAW DATA → CLEAN → ANALYZE → VISUALIZE → INSIGHT

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Database,
  Sparkles,
  BarChart3,
  LineChart,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Github,
} from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import { staggerContainer, staggerItem } from '../../animations/variants';

// DASHBOARD IMAGE: save your real Power BI/dashboard screenshot at
// src/assets/images/dashboards/churn-dashboard.png (or .jpg — just update
// the extension below to match). Imported as a module, not a raw string
// path, so it actually bundles correctly in production (same fix used for
// the Hero photo and project screenshots).
import churnDashboardImg from '../../assets/images/dashboards/churn-dashboard.png';

const pipeline = [
  {
    number: '01',
    title: 'Raw Data',
    icon: Database,
    description: 'Collect and understand the dataset.',
  },
  {
    number: '02',
    title: 'Clean',
    icon: Sparkles,
    description: 'Handle missing values and inconsistencies.',
  },
  {
    number: '03',
    title: 'Analyze',
    icon: BarChart3,
    description: 'Find patterns, relationships and trends.',
  },
  {
    number: '04',
    title: 'Visualize',
    icon: LineChart,
    description: 'Turn analysis into clear visual stories.',
  },
  {
    number: '05',
    title: 'Insight',
    icon: Lightbulb,
    description: 'Convert findings into useful decisions.',
  },
];

const technologies = [
  'Python',
  'Pandas',
  'SQL',
  'Power BI',
  'Excel',
  'Machine Learning',
];

export default function DataAnalytics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section
      id="data-analytics"
      className="relative overflow-hidden section-padding mesh-data"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Red glow */}
        <motion.div
          className="
            absolute
            -top-40
            right-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-accent/15
            blur-[130px]
          "
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Crimson glow */}
        <motion.div
          className="
            absolute
            bottom-[-180px]
            left-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-crimson/30
            blur-[130px]
          "
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Background text */}
        <div
          className="
            absolute
            -right-10
            top-[12%]
            font-display
            text-[9rem]
            sm:text-[14rem]
            lg:text-[19rem]
            font-bold
            leading-none
            tracking-[-0.09em]
            text-white/[0.025]
            select-none
          "
        >
          DATA
        </div>

        {/* Decorative vertical line */}
        <div
          className="
            absolute
            left-[8%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-accent/15
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="relative z-10 section-container">

        <SectionHeading
          eyebrow="Data Analytics"
          title="Turning raw data into decisions"
          subtitle="Every dataset goes through a disciplined pipeline before it becomes a recommendation."
        />

        {/* =====================================================
            ANALYTICS PIPELINE
            ===================================================== */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.12)}
          className="
            relative
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-4
          "
        >
          {pipeline.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-black/35
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-500
                    hover:border-accent/50
                    hover:bg-black/50
                    hover:shadow-red
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      bg-accent/0
                      blur-[50px]
                      transition-all
                      duration-500
                      group-hover:bg-accent/20
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                      mb-8
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-accent/10
                        border
                        border-accent/20
                        text-accent-soft
                        transition-all
                        duration-300
                        group-hover:bg-accent
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <span
                      className="
                        font-display
                        text-xs
                        font-semibold
                        tracking-widest
                        text-white/25
                        group-hover:text-accent-soft
                        transition-colors
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      relative
                      font-display
                      text-lg
                      font-semibold
                      text-white
                      mb-2
                      group-hover:text-accent-soft
                      transition-colors
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      relative
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    {step.description}
                  </p>
                </motion.div>

                {/* Desktop arrow */}
                {index < pipeline.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.4 + index * 0.15,
                    }}
                    className="
                      hidden
                      lg:flex
                      absolute
                      -right-4
                      top-1/2
                      z-20
                      -translate-y-1/2
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-accent/20
                      bg-[#080606]
                      text-accent-soft
                    "
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* =====================================================
            FLAGSHIP CASE STUDY
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.65,
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.09]
            bg-black/45
            backdrop-blur-xl
            shadow-cinematic
          "
        >
          {/* Case study glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-accent/10
              blur-[120px]
            "
          />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* =================================================
                LEFT — PROJECT INFORMATION
                ================================================= */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex items-center gap-3 mb-6">
                <span
                  className="
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-accent
                    shadow-[0_0_12px_rgba(193,18,31,0.8)]
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-accent-soft
                  "
                >
                  Flagship Case Study
                </span>
              </div>

              <h3
                className="
                  font-display
                  text-3xl
                  sm:text-4xl
                  font-semibold
                  tracking-tight
                  text-white
                  leading-tight
                "
              >
                Customer
                <br />
                <span className="text-accent-soft">
                  Churn Analysis
                </span>
              </h3>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-sm
                  leading-7
                  text-muted
                "
              >
                An end-to-end analytics project focused on
                understanding customer churn, identifying patterns
                in customer behavior and turning those findings into
                actionable business recommendations.
              </p>

              {/* Technologies */}
              <div className="mt-8">

                <p
                  className="
                    mb-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  Tools & Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        px-3
                        py-1.5
                        text-xs
                        text-white/65
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="https://github.com/juliussarah237-tech/Codveda-Data-Analytics-Internship"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-accent
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    shadow-red
                    transition-all
                    hover:bg-accent-bright
                    hover:-translate-y-0.5
                  "
                >
                  View Case Study
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://github.com/juliussarah237-tech/Codveda-Data-Analytics-Internship"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-white/70
                    transition-all
                    hover:border-accent/40
                    hover:text-white
                  "
                >
                  GitHub
                  <Github size={14} />
                </a>

              </div>
            </div>

            {/* =================================================
                RIGHT — ANALYTICS VISUAL
                Now shows the real dashboard image instead of a fake
                mock chart. Everything else in this file is unchanged.
                ================================================= */}

            <div
              className="
                relative
                min-h-[400px]
                lg:min-h-full
                border-t
                lg:border-t-0
                lg:border-l
                border-white/[0.08]
                bg-[#080606]
              "
            >

              {/* Dashboard image */}
              <div
                className="
                  absolute
                  inset-6
                  sm:inset-10
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0c090a]
                  overflow-hidden
                "
              >
                <img
                  src={churnDashboardImg}
                  alt="Customer Churn Analysis dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM MESSAGE
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <div className="h-px w-12 bg-accent/30" />

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/30
            "
          >
            Data → Analysis → Decision
          </p>

          <div className="h-px w-12 bg-accent/30" />
        </motion.div>

      </div>
    </section>
  );
}