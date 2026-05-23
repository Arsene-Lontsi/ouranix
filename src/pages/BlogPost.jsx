import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import ContactSection from "../components/sections/ContactSection";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-page rounded-b-4xl overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#111] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.5 7H2.5M2.5 7L6 3.5M2.5 7L6 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Blog
              </Link>
              <span className="text-[#bbb]">/</span>
              <span className="text-xs font-medium text-[#888] bg-black/6 px-2.5 py-1 rounded-full">{post.category}</span>
            </div>

            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111] max-w-3xl leading-[1.05] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#888]">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-page pb-0">
        <div className="container-site">
          <motion.div
            className="aspect-[16/7] rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`absolute inset-0 bg-linear-to-br ${post.gradient}`} />
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-pad bg-page">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_600px_1fr] gap-0">
            <div />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl text-[#555] leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              {/* Placeholder article content */}
              <div className="space-y-6 text-base text-[#555] leading-relaxed">
                <p>
                  The best work happens when clarity meets intention. Whether you're launching your first
                  product or refreshing a maturing brand, the principles of strong design remain consistent —
                  and they're more accessible than you might think.
                </p>
                <p>
                  Great design isn't about complexity. It's about making the right choices at the right
                  time — for your audience, your goals, and your stage of growth. The studios and founders
                  who understand this tend to build lasting things.
                </p>
                <h2 className="text-2xl font-extrabold text-[#111] tracking-tight pt-4">
                  Starting with the right foundation
                </h2>
                <p>
                  Before any pixels hit the canvas, the most important work is strategic. What are you
                  communicating? To whom? With what tone? These questions shape every decision that follows —
                  from your type choices to your color palette to the way you structure a landing page.
                </p>
                <p>
                  Skipping this phase in the name of speed is one of the most common and costly mistakes
                  early-stage teams make. The output looks fast but often needs rebuilding within months as
                  the business evolves and the design no longer fits the story.
                </p>
                <h2 className="text-2xl font-extrabold text-[#111] tracking-tight pt-4">
                  Consistency as a competitive advantage
                </h2>
                <p>
                  Consistency builds trust. When every touchpoint — your website, your pitch deck, your
                  social presence — feels like it belongs to the same world, you signal professionalism and
                  intent. That signal compounds over time. The brands people remember are the ones that show
                  up the same way, every time.
                </p>
                <p>
                  A lightweight design system, even just a documented type scale, color set, and component
                  library, removes friction from every future design decision. Build it once; benefit forever.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-black/10 flex items-center justify-between">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#888] hover:text-[#111] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.5 7H2.5M2.5 7L6 3.5M2.5 7L6 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  All articles
                </Link>
                <Link to="/contact" className="btn-dark text-sm">
                  Work with us
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H3.5M11.5 2.5V10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
            <div />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
