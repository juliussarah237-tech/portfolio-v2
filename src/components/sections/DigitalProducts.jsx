// 07 — Digital Products
// Animated product showcase.
// Product content is loaded from ../../data/products.

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowUpRight,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { products } from '../../data/products';

export default function DigitalProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="products"
      className="
        relative
        overflow-hidden
        section-padding
        mesh-warm
      "
    >

      {/* =====================================================
          BACKGROUND DESIGN
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

        {/* Large background word */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
          }}
          className="
            absolute
            -top-8
            left-[-5%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(6rem,18vw,18rem)]
            leading-none
            text-white/[0.025]
          "
        >
          
        </motion.div>


        {/* Secondary background word */}

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
            top-[35%]
            right-[-8%]
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
          LEARN
        </motion.div>


        {/* Bottom background word */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
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
            left-[5%]
            whitespace-nowrap
            font-display
            font-bold
            uppercase
            tracking-[-0.07em]
            text-[clamp(5rem,16vw,16rem)]
            leading-none
            text-white/[0.02]
          "
        >
          
        </motion.div>


        {/* =================================================
            ANIMATED RED GLOW
            ================================================= */}

        <motion.div
          className="
            absolute
            top-[5%]
            left-[15%]
            h-80
            w-80
            rounded-full
            bg-accent/10
            blur-[120px]
          "
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
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
            top-[40%]
            right-[5%]
            h-96
            w-96
            rounded-full
            bg-[#7a1a1a]/20
            blur-[130px]
          "
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* Small accent glow */}

        <motion.div
          className="
            absolute
            bottom-[10%]
            left-[35%]
            h-72
            w-72
            rounded-full
            bg-accent-soft/10
            blur-[110px]
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

        {/* =================================================
            SECTION HEADING
            ================================================= */}

        <SectionHeading
          eyebrow="Digital Products"
          title="Learn. Build. Grow."
          subtitle="Practical resources and programs designed to help you build real technology skills."
        />


        {/* =================================================
            PRODUCT GRID
            ================================================= */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.15)}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >

          {products.map((product, index) => (

            <motion.article
              key={product.id}
              variants={staggerItem}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-bg-soft/65
                backdrop-blur-md
                p-7
                sm:p-8
                transition-all
                duration-300
                hover:border-accent/40
                hover:shadow-2xl
                hover:shadow-accent/5
              "
            >

              {/* =================================================
                  HOVER GRADIENT
                  ================================================= */}

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
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />


              {/* =================================================
                  TOP ROW
                  ================================================= */}

              <div className="relative flex items-start justify-between gap-6">

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-accent
                    to-accent-soft
                    text-white
                    shadow-lg
                    shadow-accent/20
                  "
                >
                  <ShoppingBag size={23} />
                </motion.div>


                {/* Product number */}

                <span
                  className="
                    font-display
                    text-sm
                    font-semibold
                    text-muted/50
                    group-hover:text-accent-soft
                    transition-colors
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

              </div>


              {/* =================================================
                  PRODUCT NAME + BRAND
                  ================================================= */}

              <div className="relative mt-7">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mb-2
                  "
                >
                  <Sparkles
                    size={13}
                    className="text-accent-soft"
                  />

                  <span
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-accent-soft
                    "
                  >
                    {product.brand}
                  </span>
                </div>


                <h3
                  className="
                    font-display
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-ink
                    leading-tight
                    group-hover:text-accent-soft
                    transition-colors
                    duration-300
                  "
                >
                  {product.name}
                </h3>

              </div>


              {/* =================================================
                  PRICE
                  ================================================= */}

              <div className="relative mt-6">

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-widest
                    text-muted
                  "
                >
                  Investment
                </span>

                <div
                  className="
                    mt-1
                    font-display
                    text-2xl
                    font-semibold
                    text-ink
                  "
                >
                  {product.price}
                </div>

              </div>


              {/* =================================================
                  WHAT IT TEACHES
                  ================================================= */}

              <div className="relative mt-7">

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-accent-soft
                  "
                >
                  What it teaches
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-muted
                    leading-relaxed
                  "
                >
                  {product.whatItTeaches}
                </p>

              </div>


              {/* =================================================
                  WHO IT'S FOR
                  ================================================= */}

              <div className="relative mt-6">

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-accent-soft
                  "
                >
                  Who it's for
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-muted
                    leading-relaxed
                  "
                >
                  {product.whoItsFor}
                </p>

              </div>


              {/* =================================================
                  CTA
                  ================================================= */}

              <div className="relative mt-8 pt-6 border-t border-border">

                <a
                  href={product.selarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-between
                    gap-3
                    rounded-full
                    bg-accent
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-accent-soft
                    hover:gap-4
                    shadow-lg
                    shadow-accent/10
                  "
                >
                  View product

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>

              </div>


              {/* =================================================
                  DECORATIVE CORNER
                  ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-40
                  w-40
                  rounded-full
                  border
                  border-accent/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  -right-10
                  h-24
                  w-24
                  rounded-full
                  bg-accent/10
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

            </motion.article>

          ))}

        </motion.div>


        {/* =================================================
            BOTTOM LABEL
            ================================================= */}

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
            delay: 0.8,
            duration: 0.6,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-muted
          "
        >
          <span className="h-px w-8 bg-border" />

          <span>
            Practical resources for real-world skills.
          </span>

          <span className="h-px w-8 bg-border" />
        </motion.div>

      </div>

    </section>
  );
}