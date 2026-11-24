// Wrapper that fades/slides its children into view the first time they
// scroll into the viewport. Wrap any <section> content in this.
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../../animations/variants';

export default function AnimatedSection({
  children,
  className = '',
  variants = fadeUp,
  as = 'div',
  threshold = 0.15,
  ...rest
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
