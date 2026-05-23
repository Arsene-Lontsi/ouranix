import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCard from "../components/ui/BlogCard";
import { blogPosts } from "../data/blogPosts";
import PageHero from "../components/ui/PageHero";
import ContactSection from "../components/sections/ContactSection";

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        line1={{ text: "Our Blog", color: "black" }}
        circle1="from-stone-500 via-stone-700 to-zinc-900"
        line1accent={{ text: "Insights", color: "orange" }}
        line2={{ text: "Behind the", color: "gray" }}
        circle2="from-zinc-400 via-zinc-600 to-zinc-900"
        line2accent={{ text: "Builds", color: "black" }}
        subtitle="Ideas, stories, and strategies from the creative edge covering design development, and the tools that bring bold digital work to life."
        cta={{ label: "Contact to get Featured", to: "/contact" }}
      />

      <section className="section-pad bg-page-2">
        <div className="container-site">
          <p className="paren-label mb-4">(Intro)</p>

          {/* Ghost watermark */}
          <div className="relative overflow-hidden mb-10 -mx-4">
            <span className="watermark-text whitespace-nowrap" style={{ fontSize: "clamp(60px,10vw,140px)" }}>
              Blog Insights
            </span>
          </div>

          {/* Featured post */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link to={`/blog/${featured.slug}`} className="block group card-wrap">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-4/3 rounded-2xl overflow-hidden relative">
                  <div className={`card-img absolute inset-0 bg-linear-to-br ${featured.gradient}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-accent/15 text-accent px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                    <span className="text-xs text-[#888] bg-black/6 px-2.5 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-xs text-[#888]">{featured.date}</span>
                  </div>
                  <h2 className="text-display text-3xl lg:text-4xl font-extrabold text-[#111] mb-4 group-hover:text-accent transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-base text-[#555] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#888] group-hover:text-accent transition-colors">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* All articles */}
          <div className="border-t border-black/8 pt-14">
            <h2 className="text-xs text-[#888] tracking-widest uppercase mb-10">All Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
