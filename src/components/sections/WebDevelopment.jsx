// 04 — Web Development
// 5-project interactive gallery.
// Large animated background typography creates depth while scrolling.

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import Modal from '../common/Modal';

import {
  staggerContainer,
  staggerItem,
  cardHover,
} from '../../animations/variants';

import { projects } from '../../data/projects';

export default function WebDevelopment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [activeProject, setActiveProject] = useState(null);

  // Keep only 5 projects
  const displayedProjects = projects.slice(0, 5);

  return (
    <section
      id="web-development"
      className="relative overflow-hidden section-padding mesh-diagonal"
    >

      {/* =====================================================
          LARGE BACKGROUND TYPOGRAPHY
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          select-none
        "
        aria-hidden="true"
      >

        {/* WEB */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: 'easeOut',
          }}
          className="
            absolute
            -top-12
            -right-[0%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.08em]
            text-[clamp(8rem,22vw,23rem)]
            leading-none
            text-white/[0.035]
          "
        >
          WEB
        </motion.div>


        {/* DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.15,
            ease: 'easeOut',
          }}
          className="
            absolute
            bottom-[0%]
            -right-[18%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.08em]
            text-[clamp(6rem,18vw,19rem)]
            leading-none
            text-white/[0.035]
          "
        >
          DEVELOPMENT
        </motion.div>


        


        {/* =================================================
            RED GLOW 01
            ================================================= */}

        <motion.div
          className="
            absolute
            top-[12%]
            left-[28%]
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-accent/10
            blur-[120px]
          "
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =================================================
            RED GLOW 02
            ================================================= */}

        <motion.div
          className="
            absolute
            bottom-[12%]
            right-[8%]
            h-[24rem]
            w-[24rem]
            rounded-full
            bg-[#9b111e]/20
            blur-[130px]
          "
          animate={{
            x: [0, -50, 0],
            y: [0, -35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =================================================
            SMALL RED LIGHT
            ================================================= */}

        <motion.div
          className="
            absolute
            top-[55%]
            left-[8%]
            h-40
            w-40
            rounded-full
            bg-red-500/10
            blur-[90px]
          "
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =================================================
            DECORATIVE GRID
            ================================================= */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

      </div>


      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="section-container relative z-10">

        {/* SECTION HEADING */}

        <SectionHeading
          eyebrow="Web Development"
          title="Selected work"
          subtitle="A look at the websites and digital experiences I've built."
        />


        {/* =====================================================
            PROJECT GALLERY
            ===================================================== */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.12)}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {displayedProjects.map((project, index) => (

            <motion.button
              key={project.id}
              type="button"
              variants={staggerItem}
              initial="rest"
              whileHover="hover"
              animate="rest"
              onClick={() => setActiveProject(project)}
              className="
                group
                relative
                text-left
                rounded-2xl
                border
                border-border
                bg-bg-soft/75
                backdrop-blur-xl
                overflow-hidden
                focus:outline-none
                focus:ring-2
                focus:ring-accent-soft
                transition-all
                duration-300
                hover:border-accent/50
                hover:shadow-[0_20px_70px_rgba(255,60,30,0.12)]
              "
            >

              <motion.div variants={cardHover}>

                {/* =================================================
                    PROJECT IMAGE
                    ================================================= */}

                <div
                  className="
                    relative
                    aspect-video
                    bg-bg
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-border
                  "
                >

                  {project.thumbnail ? (

                    <img
                      src={project.thumbnail}
                      alt={`${project.title} screenshot`}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  ) : (

                    <>
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-accent/15
                          via-transparent
                          to-[#7a1a1a]/30
                        "
                      />

                      <div
                        className="
                          absolute
                          w-32
                          h-32
                          rounded-full
                          bg-accent/10
                          blur-3xl
                        "
                      />

                      <div className="relative text-center px-6">

                        <span
                          className="
                            block
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-accent-soft
                            mb-3
                          "
                        >
                          Project {String(index + 1).padStart(2, '0')}
                        </span>

                        <span
                          className="
                            font-display
                            text-lg
                            font-semibold
                            text-ink
                          "
                        >
                          {project.title}
                        </span>

                        <span
                          className="
                            block
                            text-xs
                            text-muted
                            mt-2
                          "
                        >
                          Screenshot coming soon
                        </span>

                      </div>
                    </>
                  )}


                  {/* HOVER OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/60
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        text-black
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        translate-y-4
                        group-hover:translate-y-0
                        transition-transform
                        duration-300
                      "
                    >
                      View Case Study
                      <ArrowUpRight size={16} />
                    </span>

                  </div>

                </div>


                {/* =================================================
                    PROJECT INFORMATION
                    ================================================= */}

                <div className="p-6">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      mb-3
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-medium
                        text-accent-soft
                        uppercase
                        tracking-wide
                      "
                    >
                      {project.category}
                    </span>

                    <span className="text-xs text-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </div>


                  <h3
                    className="
                      font-display
                      text-lg
                      font-semibold
                      text-ink
                      mb-3
                      group-hover:text-accent-soft
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>


                  {project.description && (

                    <p
                      className="
                        text-sm
                        text-muted
                        leading-relaxed
                        mb-5
                      "
                    >
                      {project.description}
                    </p>

                  )}


                  {/* TECHNOLOGIES */}

                  {project.tools &&
                    project.tools.length > 0 && (

                      <div className="flex flex-wrap gap-2">

                        {project.tools.map((tool) => (

                          <span
                            key={tool}
                            className="
                              text-xs
                              px-2.5
                              py-1
                              rounded-full
                              bg-accent/10
                              text-accent-soft
                              border
                              border-accent/10
                            "
                          >
                            {tool}
                          </span>

                        ))}

                      </div>

                    )}

                </div>

              </motion.div>

            </motion.button>

          ))}

        </motion.div>


        {/* =====================================================
            PROJECT COUNT
            ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          className="mt-12 text-center"
        >

          <p className="text-sm text-muted">

            <span className="text-accent-soft font-semibold">
              {displayedProjects.length}
            </span>{' '}

            projects showcased

          </p>

        </motion.div>

      </div>


      {/* =====================================================
          CASE STUDY MODAL
          ===================================================== */}

      <Modal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      >

        {activeProject && (

          <div>

            {/* CATEGORY */}

            <span
              className="
                text-xs
                font-medium
                text-accent-soft
                uppercase
                tracking-wide
              "
            >
              {activeProject.category}
            </span>


            {/* TITLE */}

            <h3
              className="
                font-display
                text-2xl
                sm:text-3xl
                font-semibold
                text-ink
                mt-2
                mb-4
              "
            >
              {activeProject.title}
            </h3>


            {/* TOOLS */}

            {activeProject.tools &&
              activeProject.tools.length > 0 && (

                <div className="flex flex-wrap gap-2 mb-8">

                  {activeProject.tools.map((tool) => (

                    <span
                      key={tool}
                      className="
                        text-xs
                        px-3
                        py-1.5
                        rounded-full
                        bg-accent/10
                        text-accent-soft
                      "
                    >
                      {tool}
                    </span>

                  ))}

                </div>

              )}


            {/* CASE STUDY */}

            <div className="space-y-6">

              <div>

                <h4 className="text-sm font-semibold text-ink mb-2">
                  Problem
                </h4>

                <p className="text-sm text-muted leading-relaxed">
                  {activeProject.problem}
                </p>

              </div>


              <div>

                <h4 className="text-sm font-semibold text-ink mb-2">
                  Design
                </h4>

                <p className="text-sm text-muted leading-relaxed">
                  {activeProject.design}
                </p>

              </div>


              <div>

                <h4 className="text-sm font-semibold text-ink mb-2">
                  Development
                </h4>

                <p className="text-sm text-muted leading-relaxed">
                  {activeProject.development}
                </p>

              </div>


              <div>

                <h4 className="text-sm font-semibold text-ink mb-2">
                  Result
                </h4>

                <p className="text-sm text-muted leading-relaxed">
                  {activeProject.result}
                </p>

              </div>

            </div>


            {/* LINKS */}

            <div className="mt-8 flex flex-wrap gap-5">

              {activeProject.liveUrl && (

                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-ink
                    hover:text-accent-soft
                    transition-colors
                  "
                >
                  <ExternalLink size={16} />
                  Live site
                </a>

              )}


              {activeProject.repoUrl && (

                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-ink
                    hover:text-accent-soft
                    transition-colors
                  "
                >
                  <Github size={16} />
                  Repository
                </a>

              )}

            </div>

          </div>

        )}

      </Modal>

    </section>
  );
}