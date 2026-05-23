import { motion } from "framer-motion";
import { Link } from "react-router-dom";


/* Inline circle placeholder images using colored gradients */
function HeroCircle({ image, gradient, size = "sm" }) {
  const dim = size === "sm" ? "w-[52px] h-[52px]" : "w-[72px] h-[72px] md:w-[88px] md:h-[88px] lg:w-[100px] lg:h-[100px]";
  return (
    <span
      className={`hidden sm:inline-block ${dim} rounded-full overflow-hidden align-middle mx-1 relative shrink-0 animate-diagonal`}
      style={{ verticalAlign: "middle", top: "-2px" }}
    >
      <img src={image} alt="" className="absolute inset-0 w-full h-full" />
      <span className={`block w-full h-full bg-linear-to-br ${gradient}`} />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-page rounded-b-4xl overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="container-site relative z-10">

        {/* Trusted by row */}
        <motion.div
          className="flex justify-center items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex -space-x-2">
            {["from-amber-400 to-orange-500", "from-blue-400 to-indigo-500", "from-emerald-400 to-teal-500"].map((g, i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#ebebeb] overflow-hidden inline-block"
              >
                <span className={`block w-full h-full bg-linear-to-br ${g}`} />
              </span>
            ))}
          </div>
          <span className="text-sm text-[#666] font-medium">Trusted by founders.</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-display text-4xl sm:text-5xl md:text-7xl leading-[1.0] tracking-[-0.03em]">
            {/* Line 1 */}
            <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
              <span className="text-[#111]">Effortless</span>
              <HeroCircle gradient="from-orange-400 via-red-500 to-rose-700" />
              <span className="text-accent">Design</span>
            </span>
            {/* Line 2 */}
            <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1">
              <span className="text-[#888]">for</span>
              <HeroCircle gradient="from-blue-500 via-indigo-600 to-violet-800" />
              <span className="text-[#111]">Design Startups</span>
            </span>
            {/* Line 3 */}
            <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1">
              <span className="text-[#888]">based in</span>
              <span className="text-[#111]">London,</span>
              <HeroCircle gradient="from-teal-400 via-cyan-500 to-blue-700" />
              <span className="text-[#111]">UK</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-[#666] text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          We make it easy for startups to launch, grow, and scale with clean,
          conversion focused designs — no delays, no drama.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/services" className="btn-dark">
            View Plans
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
