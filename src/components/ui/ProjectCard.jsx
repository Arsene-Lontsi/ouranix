import { motion } from "framer-motion";

/**
 * Dark perspective row card used in both RecentWorks and Works page.
 * Props: project { name, year, role, tags, gradient, description }, index, total
 */
export default function ProjectCard({ project, index, total }) {
  const num = String(index + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");

  return (
    <motion.div
      className="relative rounded-2xl bg-dark-2 overflow-hidden mb-6 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-0 min-h-85">
        {/* Left: number + description + project name */}
        <div className="p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/6">
          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-4">
              {num} / {tot}
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              {project.description}
            </p>
          </div>
          <span className="text-3xl font-extrabold text-white/90 tracking-tight mt-6 leading-none">
            {project.name}
          </span>
        </div>

        {/* Center: perspective mockup card */}
        <div className="relative flex items-center justify-center py-8 overflow-hidden bg-dark">
          {/* Subtle radial glow behind card */}
          <div className={`absolute inset-0 opacity-20 bg-radial-[ellipse_at_center] bg-linear-to-br ${project.gradient}`} />
          <motion.div
            className="relative w-70 h-50 rounded-xl overflow-hidden shadow-2xl"
            style={{ transform: "perspective(900px) rotateY(-10deg) rotateX(5deg)" }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/60 to-transparent">
              <span className="text-white font-extrabold text-xl tracking-tight">{project.name}</span>
            </div>
          </motion.div>
        </div>

        {/* Right: meta */}
        <div className="p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/6">
          <div className="mb-6">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Year</p>
            <p className="text-xl font-bold text-white">{project.year}</p>
          </div>
          <div className="mb-6">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Role</p>
            <p className="text-sm text-white/70">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Services</p>
            <div className="flex flex-col gap-1">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-sm text-white/50">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
