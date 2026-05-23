import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { plans } from "../../data/pricing";
import Watermark from "../ui/Watermark";

export default function Pricing() {
  const plan = plans[0]; // Standard Plan — matches reference (single card design)

  return (
    <section className="relative section-pad bg-page overflow-hidden" id="pricing">
      <Watermark text="Explore Pricing" />

      <div className="container-site relative z-10 pt-20">
        {/* Label + heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="paren-label mb-3">(Pricing Plan)</p>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111]">
            Explore Pricing
          </h2>
        </motion.div>

        {/* Single white card */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl p-10 lg:p-14 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: plan info */}
            <div>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-dark-2 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z" fill="white" opacity=".9"/>
                  <circle cx="12" cy="12" r="2" fill="white" opacity=".5"/>
                </svg>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111] mb-2">{plan.name} Plan</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-6">{plan.description}</p>

              {/* Delivery time */}
              <div className="flex items-center justify-between text-sm border-t border-black/8 pt-4">
                <span className="text-[#888]">Delivery Time</span>
                <span className="font-semibold text-[#111]">{plan.deliveryTime}</span>
              </div>
            </div>

            {/* Right: price + features + CTA */}
            <div>
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-extrabold text-[#111] tracking-tight">{plan.price}</span>
                <span className="text-[#888] text-base">{plan.per}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 border-t border-black/8 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#555]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#333]">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 bg-dark-2 text-white py-4 rounded-full text-sm font-semibold hover:bg-[#2a2a2a] transition-colors"
              >
                {plan.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
