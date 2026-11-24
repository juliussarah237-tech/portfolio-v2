// Reusable animated button. variant: "primary" | "secondary" | "ghost"
// Renders as <a> when href is passed, otherwise <button>.
import { motion } from 'framer-motion';

const styles = {
  primary:
    'bg-accent text-white hover:bg-accent-soft',
  secondary:
    'bg-transparent border border-border text-ink hover:border-accent-soft hover:text-accent-soft',
  ghost:
    'bg-transparent text-ink hover:text-accent-soft underline underline-offset-4',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  target,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} target={target} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
