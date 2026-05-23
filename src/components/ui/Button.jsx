import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 font-sans font-medium rounded-full transition-all duration-300 cursor-pointer";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-cream text-dark hover:bg-white",
    dark:
      "bg-dark text-cream border border-dark-border hover:bg-dark-2",
    outline:
      "border border-cream/20 text-cream hover:bg-cream hover:text-dark",
    accent:
      "bg-accent text-white hover:bg-accent-hover",
    ghost:
      "text-cream hover:text-white underline underline-offset-4",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
