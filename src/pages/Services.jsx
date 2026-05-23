import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import PageHero from "../components/ui/PageHero";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import ContactSection from "../components/sections/ContactSection";

function ServiceRow({ service }) {
  return (
    <motion.div
      className="py-12 border-b border-black/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
        {/* Service name */}
        <h3 className="text-2xl font-extrabold text-[#111] pt-1">{service.title}</h3>

        {/* Image + description */}
        <div>
          <div className="aspect-4/3 rounded-2xl overflow-hidden relative mb-6">
            <div className={`absolute inset-0 bg-linear-to-br ${service.gradient}`} />
          </div>
          <p className="text-sm text-[#555] leading-relaxed mb-4">{service.description}</p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-[#555] bg-page-2 border border-black/6 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing meta + CTA */}
        <div className="lg:pt-1">
          <div className="flex justify-between text-sm border-b border-black/10 pb-4 mb-4">
            <span className="text-[#888]">Starts at</span>
            <span className="font-semibold text-[#111]">{service.price}</span>
          </div>
          <div className="flex justify-between text-sm border-b border-black/10 pb-4 mb-6">
            <span className="text-[#888]">Timeline</span>
            <span className="font-semibold text-[#111]">{service.timeline}</span>
          </div>
          <Link to="/contact" className="btn-dark w-full justify-center text-sm">
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H3.5M11.5 2.5V10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        line1={{ text: "Our Creative", color: "black" }}
        circle1="from-amber-600 via-stone-700 to-zinc-900"
        line1accent={{ text: "Services", color: "orange" }}
        line2={{ text: "Excellence", color: "gray" }}
        circle2="from-slate-600 via-zinc-700 to-zinc-900"
        line2accent={{ text: "Delivered", color: "black" }}
        subtitle="Ideas, stories, and strategies from the creative edge — covering design, development, and the tools that bring bold digital work to life."
        cta={{ label: "View Plans", to: "/contact" }}
      />

      <section className="section-pad bg-page" id="services-list">
        <div className="container-site">
          <p className="paren-label mb-3">(Services)</p>
          <h2 className="text-display text-4xl lg:text-5xl font-extrabold text-[#111] mb-10">
            What we do
          </h2>
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </section>

      <Pricing />
      <FAQ />
      <ContactSection />
    </>
  );
}
