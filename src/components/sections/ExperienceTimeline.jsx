// 05 — Internship & Experience
// Animated career timeline with large background typography,
// red ambient lighting, glass cards and progressive timeline animation.

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Monitor,
  TrendingUp,
} from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { timeline } from '../../data/timeline';

const icons = [
  Code2,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Monitor,
  TrendingUp,
];

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden section-padding mesh-warm"
    >
      {/* =====================================================
          BACKGROUND TYPOGRAPHY
          ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="
            absolute
            -top-8
            left-[-6%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(5rem,16vw,16rem)]
            leading-none
            text-white/[0.025]
          "
        >
       
        </motion.div>

        {/* JOURNEY */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: 'easeOut',
          }}
          className="
            absolute
            top-[42%]
            right-[-8%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(5rem,15vw,15rem)]
            leading-none
            text-accent/[0.035]
          "
        >
          JOURNEY
        </motion.div>

        {/* CAREER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: 'easeOut',
          }}
          className="
            absolute
            bottom-[-5%]
            left-[2%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(5rem,15vw,15rem)]
            leading-none
            text-white/[0.018]
          "
        >
        
        </motion.div>

        {/* =====================================================
            RED AMBIENT GLOWS
            ===================================================== */}

        <motion.div
          className="
            absolute
            top-[15%]
            left-[12%]
            h-80
            w-80
            rounded-full
            bg-accent/10
            blur-[150px]
          "
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            absolute
            top-[45%]
            right-[50%]
            h-96
            w-96
            rounded-full
            bg-[#7a1a1a]/20
            blur-[130px]
          "
          animate={{
            x: [0, -35, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[5%]
            left-[35%]
            h-72
            w-72
            rounded-full
            bg-accent-soft/10
            blur-[120px]
          "
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="section-container relative z-10">

        <SectionHeading
          eyebrow="Experience"
          title="How I got here"
          subtitle="From web development into data analytics — one deliberate step at a time."
          align="center"
        />

        {/* =====================================================
            TIMELINE
            ===================================================== */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.15)}
          className="relative max-w-4xl mx-auto mt-16"
        >

          {/* =================================================
              BASE TIMELINE LINE
              ================================================= */}

          <div
            className="
              absolute
              left-6
              md:left-1/2
              top-0
              bottom-0
              w-px
              bg-border
              md:-translate-x-1/2
            "
            aria-hidden="true"
          />

          {/* Animated red timeline line */}

          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            className="
              absolute
              left-6
              md:left-1/2
              top-0
              w-px
              bg-gradient-to-b
              from-accent
              via-accent-soft
              to-transparent
              md:-translate-x-1/2
            "
            aria-hidden="true"
          />

          {/* =================================================
              TIMELINE ITEMS
              ================================================= */}

          <div className="space-y-10 md:space-y-14">

            {timeline.map((step, index) => {
              const Icon = icons[index % icons.length];

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  variants={staggerItem}
                  className="
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    md:grid-cols-[1fr_64px_1fr]
                    items-center
                  "
                >

                  {/* =================================================
                      LEFT CONTENT — DESKTOP
                      ================================================= */}

                  <div
                    className={`
                      hidden
                      md:block
                      ${isEven ? 'md:pr-10' : ''}
                    `}
                  >
                    {isEven && (
                      <TimelineCard
                        step={step}
                        Icon={Icon}
                        index={index}
                        align="right"
                      />
                    )}
                  </div>

                  {/* =================================================
                      TIMELINE NODE
                      ================================================= */}

                  <div
                    className="
                      relative
                      z-20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <motion.div
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={
                        inView
                          ? {
                              scale: 1,
                              opacity: 1,
                            }
                          : {
                              scale: 0,
                              opacity: 0,
                            }
                      }
                      transition={{
                        delay: 0.3 + index * 0.15,
                        duration: 0.4,
                        type: 'spring',
                      }}
                      className="
                        relative
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-accent/40
                        bg-bg
                        shadow-lg
                        shadow-accent/20
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-1
                          rounded-full
                          border
                          border-accent/20
                        "
                      />

                      <Icon
                        size={18}
                        className="text-accent-soft"
                      />

                      {/* Pulse */}

                      <motion.span
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-accent/40
                        "
                      />
                    </motion.div>
                  </div>

                  {/* =================================================
                      RIGHT CONTENT — DESKTOP
                      ================================================= */}

                  <div
                    className={`
                      hidden
                      md:block
                      ${!isEven ? 'md:pl-10' : ''}
                    `}
                  >
                    {!isEven && (
                      <TimelineCard
                        step={step}
                        Icon={Icon}
                        index={index}
                        align="left"
                      />
                    )}
                  </div>

                  {/* =================================================
                      MOBILE CONTENT
                      ================================================= */}

                  <div className="md:hidden pl-5">
                    <TimelineCard
                      step={step}
                      Icon={Icon}
                      index={index}
                      align="left"
                    />
                  </div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* =====================================================
            END STATEMENT
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 2.5,
            duration: 0.7,
          }}
          className="mt-20 text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            The journey continues
          </p>

          <div className="mt-4 flex justify-center">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-accent
                shadow-lg
                shadow-accent/50
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* =============================================================
   TIMELINE CARD
   ============================================================= */

function TimelineCard({
  step,
  Icon,
  index,
  align = 'left',
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-bg-soft/70
        p-6
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-accent/40
        hover:shadow-xl
        hover:shadow-accent/5
        ${align === 'right' ? 'text-right' : 'text-left'}
      `}
    >

      {/* Hover gradient */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-accent/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative">

        {/* Top row */}

        <div
          className={`
            flex
            items-start
            justify-between
            gap-4
            ${align === 'right' ? 'flex-row-reverse' : ''}
          `}
        >

          {/* Icon */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-accent
              to-accent-soft
              text-white
              shadow-lg
              shadow-accent/20
            "
          >
            <Icon size={18} />
          </div>

          {/* Number */}

          <span
            className="
              font-display
              text-xs
              font-semibold
              tracking-widest
              text-muted/50
              transition-colors
              group-hover:text-accent-soft
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>

        </div>


        {/* Period */}

        {step.period && (
          <span
            className={`
              mt-5
              inline-block
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-accent-soft
            `}
          >
            {step.period}
          </span>
        )}


        {/* Title */}

        <h3
          className="
            mt-2
            font-display
            text-lg
            font-semibold
            text-ink
            transition-colors
            duration-300
            group-hover:text-accent-soft
          "
        >
          {step.title}
        </h3>


        {/* Description */}

        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-muted
          "
        >
          {step.description}
        </p>

      </div>
    </motion.div>
  );
}