// 06 — Certifications
// Animated certificate wall.
// Images display as certificate previews.
// PDF certificates display using an iframe.

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  ExternalLink,
  Maximize2,
  FileText,
  Download,
} from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import Modal from '../common/Modal';

import {
  staggerContainer,
  staggerItem,
  cardHover,
} from '../../animations/variants';

import { certifications } from '../../data/certifications';

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden section-padding mesh-deep"
    >

      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >

        {/* Red glow */}
        <motion.div
          className="
            absolute
            -top-40
            right-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-accent/10
            blur-[140px]
          "
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Deep red glow */}
        <motion.div
          className="
            absolute
            bottom-[-150px]
            left-[-10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#7a1a1a]/20
            blur-[130px]
          "
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Large background text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
          }}
          className="
            absolute
            top-10
            left-[-5%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(6rem,18vw,18rem)]
            leading-none
            text-white/[0.02]
          "
        >
          CERTIFICATES
        </motion.div>

        {/* Second background text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: 'easeOut',
          }}
          className="
            absolute
            bottom-[-4%]
            right-[-5%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(5rem,15vw,15rem)]
            leading-none
            text-accent/[0.025]
          "
        >
         
        </motion.div>

      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="section-container relative z-10">

        <SectionHeading
          eyebrow="Certifications"
          title="Credentials"
          subtitle="Professional certificates and learning milestones."
        />

        {/* =====================================================
            CERTIFICATE GRID
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
            lg:grid-cols-4
            gap-6
          "
        >

          {certifications.map((cert, index) => (

            <motion.button
              key={cert.id}
              type="button"
              variants={staggerItem}
              initial="rest"
              whileHover="hover"
              animate="rest"
              onClick={() => setActiveCert(cert)}
              className="
                group
                relative
                text-left
                rounded-2xl
                border
                border-border
                bg-bg-soft/70
                backdrop-blur-md
                overflow-hidden
                focus:outline-none
                focus:ring-2
                focus:ring-accent-soft
                transition-all
                duration-300
                hover:border-accent/40
                hover:shadow-xl
                hover:shadow-accent/5
              "
            >

              <motion.div variants={cardHover}>

                {/* =================================================
                    CERTIFICATE PREVIEW
                    ================================================= */}

                <div
                  className="
                    relative
                    aspect-[4/3]
                    bg-bg
                    border-b
                    border-border
                    overflow-hidden
                  "
                >

                  {/* IMAGE CERTIFICATE */}

                  {cert.type !== 'pdf' && cert.image && (

                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  )}

                  {/* PDF CERTIFICATE */}

                  {cert.type === 'pdf' && cert.image && (

                    <div className="relative w-full h-full bg-white">

                      <iframe
                        src={cert.image}
                        title={`${cert.title} certificate`}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          border-0
                          pointer-events-none
                        "
                      />

                      {/* PDF label */}

                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-black/75
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          text-white
                        "
                      >
                        <FileText size={13} />
                        PDF Certificate
                      </div>

                    </div>

                  )}

                  {/* FALLBACK */}

                  {!cert.image && (

                    <div
                      className="
                        w-full
                        h-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        text-muted
                        bg-bg
                      "
                    >

                      <Award
                        size={38}
                        className="text-accent-soft/60"
                      />

                      <span className="text-xs uppercase tracking-widest">
                        Certificate
                      </span>

                    </div>

                  )}

                  {/* HOVER OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/50
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      flex
                      items-center
                      justify-center
                      pointer-events-none
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
                        px-4
                        py-2
                        text-xs
                        font-medium
                        translate-y-3
                        group-hover:translate-y-0
                        transition-transform
                        duration-300
                      "
                    >
                      <Maximize2 size={14} />
                      View Certificate
                    </span>

                  </div>

                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      top-3
                      right-3
                      rounded-full
                      bg-black/70
                      px-2.5
                      py-1
                      text-[10px]
                      font-semibold
                      text-white
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                </div>

                {/* =================================================
                    CERTIFICATE INFORMATION
                    ================================================= */}

                <div className="p-5">

                  <h3
                    className="
                      font-display
                      text-base
                      font-semibold
                      text-ink
                      mb-2
                      group-hover:text-accent-soft
                      transition-colors
                    "
                  >
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted">
                    {cert.provider}
                  </p>

                  {cert.year && (
                    <p className="text-xs text-muted mt-1">
                      {cert.year}
                    </p>
                  )}

                </div>

              </motion.div>

            </motion.button>

          ))}

        </motion.div>

      </div>

      {/* =====================================================
          CERTIFICATE MODAL
          ===================================================== */}

      <Modal
        isOpen={!!activeCert}
        onClose={() => setActiveCert(null)}
      >

        {activeCert && (

          <div>

            {/* =================================================
                CERTIFICATE PREVIEW
                ================================================= */}

            <div
              className="
                relative
                rounded-xl
                bg-bg
                border
                border-border
                overflow-hidden
                mb-6
              "
            >

              {/* IMAGE */}

              {activeCert.type !== 'pdf' && activeCert.image && (

                <img
                  src={activeCert.image}
                  alt={`${activeCert.title} certificate`}
                  className="
                    w-full
                    max-h-[70vh]
                    object-contain
                  "
                />

              )}

              {/* PDF */}

              {activeCert.type === 'pdf' && activeCert.image && (

                <iframe
                  src={activeCert.image}
                  title={`${activeCert.title} certificate`}
                  className="
                    w-full
                    h-[70vh]
                    border-0
                    bg-white
                  "
                />

              )}

              {/* FALLBACK */}

              {!activeCert.image && (

                <div
                  className="
                    aspect-[4/3]
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Award
                    size={50}
                    className="text-accent-soft/60"
                  />

                </div>

              )}

            </div>

            {/* =================================================
                CERTIFICATE DETAILS
                ================================================= */}

            <span
              className="
                text-xs
                font-medium
                text-accent-soft
                uppercase
                tracking-widest
              "
            >
              Certification
            </span>

            <h3
              className="
                font-display
                text-2xl
                font-semibold
                text-ink
                mt-2
                mb-2
              "
            >
              {activeCert.title}
            </h3>

            <p className="text-sm text-muted">
              {activeCert.provider}
            </p>

            {activeCert.year && (
              <p className="text-xs text-muted mt-1">
                {activeCert.year}
              </p>
            )}

            {/* =================================================
                PDF BUTTON
                ================================================= */}

            {activeCert.type === 'pdf' && activeCert.image && (

              <a
                href={activeCert.image}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-accent
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  hover:bg-accent-soft
                  transition-colors
                "
              >
                <Download size={16} />
                Open PDF
              </a>

            )}

            {/* =================================================
                VERIFICATION LINK
                ================================================= */}

            {activeCert.credentialUrl && (

              <a
                href={activeCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-6
                  ml-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-ink
                  hover:border-accent
                  hover:text-accent-soft
                  transition-colors
                "
              >
                <ExternalLink size={16} />
                Verify credential
              </a>

            )}

          </div>

        )}

      </Modal>

    </section>
  );
}