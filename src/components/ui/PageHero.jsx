import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroCircle({ gradient }) {
  return (
    <span
      className="inline-block w-[72px] h-[72px] md:w-[88px] md:h-[88px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden align-middle mx-1 shrink-0"
      style={{ verticalAlign: "middle", top: "-2px", position: "relative" }}
    >
      <span className={`block w-full h-full bg-linear-to-br ${gradient}`} />
    </span>
  );
}

/**
 * Shared centered page hero used on Works, Services, About, Blog, Contact.
 *
 * line1: { text, color } – "black" | "gray" | "orange"
 * circle1: gradient string
 * line1accent: { text, color }
 * line2: { text, color }
 * circle2: gradient string
 * line2accent: { text, color }
 * subtitle: string
 * cta: { label, to }
 */
export default function PageHero({ line1, circle1, line1accent, line2, circle2, line2accent, subtitle, cta }) {
  const colorClass = (c) => {
    if (c === "orange") return "text-accent";
    if (c === "gray") return "text-[#888]";
    return "text-[#111]";
  };

  return (
    <section className="relative bg-page rounded-b-4xl overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="container-site">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-display text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.0] tracking-[-0.03em] mb-8">
            <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
              <span className={colorClass(line1.color)}>{line1.text}</span>
              {circle1 && <HeroCircle gradient={circle1} />}
              {line1accent && <span className={colorClass(line1accent.color)}>{line1accent.text}</span>}
            </span>
            <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1">
              <span className={colorClass(line2.color)}>{line2.text}</span>
              {circle2 && <HeroCircle gradient={circle2} />}
              {line2accent && <span className={colorClass(line2accent.color)}>{line2accent.text}</span>}
            </span>
          </h1>

          {subtitle && (
            <p className="text-[#666] text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}

          {cta && (
            <Link to={cta.to} className="btn-dark">
              {cta.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
