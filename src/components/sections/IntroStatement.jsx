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
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Orange italic label */}
          <p className="paren-label mb-6">(hello)</p>

          {/* Bold centered statement */}
          <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#111] leading-[1.1] tracking-tight mb-10">
            We help fast moving digital startups{" "}
            launch sharper brands and websites —{" "}
            with clarity , speed, and{" "}
            <span className="text-accent">no drama.</span>
          </h2>

          {/* Service pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#777] bg-[#d8d8d8] border border-black/6 px-4 py-2 rounded-full"
              >
                <span className="text-[10px] opacity-60">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
