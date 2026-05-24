import { motion } from "framer-motion";

const tags = [
  { icon: "✦", label: "Branding" },
  { icon: "⊕", label: "Logo" },
  { icon: "⊕", label: "Website" },
  { icon: "✎", label: "Illustration" },
  { icon: "▭", label: "Interface" },
  { icon: "◎", label: "Strategy" },
];

export default function IntroStatement() {
  return (
    <section className="section-pad bg-page overflow-hidden">
      <div className="container-site">
        <motion.div
          className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Orange italic label */}
          <p className="paren-label text-3xl mb-6">(hello)</p>

          {/* Bold centered statement */}
          <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#111] leading-[1.1] tracking-tight mb-10">
            We help fast moving digital startups{" "}
            launch sharper brands and websites —{" "}
            with clarity , speed, and{" "}
            <span className="text-accent">no drama.</span>
          </h2>

          {/* Service pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-white/10
                  bg-linear-to-b from-neutral-600/90 via-neutral-600 to-neutral-600/90 px-5 py-2.5
                  text-sm font-semibold text-white/75
                  shadow-2xl
                  transition-transform duration-200
                  hover:scale-105
                "
              >
                <span className="text-center text-white/70">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
