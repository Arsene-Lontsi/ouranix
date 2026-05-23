import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, index = 0, light = false }) {
  const bg = light
    ? "bg-cream-2 border-dark/5"
    : "bg-dark-2 border-cream/8";
  const textColor = light ? "text-dark" : "text-cream";
  const mutedColor = light ? "text-dark/50" : "text-cream/50";
  const tagBg = light ? "bg-dark/5 text-dark/60" : "bg-cream/5 text-cream/50";
  const titleColor = light ? "text-dark" : "text-cream";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
    >
      <Link to="/services" className="block group">
        <div className={`rounded-2xl border overflow-hidden ${bg} transition-all duration-300 hover:-translate-y-1`}>
          {/* Image */}
          <div className={`aspect-16/9 bg-linear-to-br ${service.gradient} img-placeholder relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-end p-6">
              <span className={`text-xs font-medium tracking-widest uppercase ${tagBg} px-3 py-1.5 rounded-full backdrop-blur-sm`}>
                {service.title}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <h3 className={`text-display text-2xl lg:text-3xl font-normal mb-3 ${titleColor} group-hover:text-accent transition-colors duration-300`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${mutedColor}`}>
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span className={mutedColor}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
