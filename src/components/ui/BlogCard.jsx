import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
    >
      <Link to={`/blog/${post.slug}`} className="block group card-wrap">
        {/* Image */}
        <div className="aspect-4/3 rounded-2xl overflow-hidden relative mb-4">
          <div className={`card-img absolute inset-0 bg-linear-to-br ${post.gradient}`} />
          {/* Read time badge */}
          <div className="absolute bottom-4 right-4">
            <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-[#888] bg-black/6 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-[#888]">{post.date}</span>
          </div>
          <h3 className="text-base font-bold text-[#111] leading-snug mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-[#666] line-clamp-2 leading-relaxed mb-3">
            {post.excerpt}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#888] group-hover:text-accent transition-colors duration-300">
            Read article
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
