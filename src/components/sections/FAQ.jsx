import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";

const faqs = [
  {
    question: "Why Agero instead of hiring a full-time designer?",
    answer:
      "A full-time designer costs $80k–$120k per year before benefits, equipment, and management overhead. With Agero, you get senior-level design output at a fraction of the cost — with the flexibility to pause, scale, or stop whenever your needs change.",
  },
  {
    question: "How fast can you deliver design work?",
    answer:
      "Most projects are delivered within 4–6 weeks depending on scope. For Standard plan clients with a clear brief and wireframe, we can often move faster. We work weekdays and respond within a few hours during business hours.",
  },
  {
    question: "What does the Agero process look like?",
    answer:
      "We start with a discovery call to understand your goals, brand, and audience. From there we create a strategy brief, move into design exploration, and iterate until you're thrilled. Premium clients get dedicated concept rounds and more collaborative touchpoints.",
  },
  {
    question: "How do I request design work once I'm a client?",
    answer:
      "Once onboarded, you'll have access to a shared project board where you can submit requests, share feedback, and track progress. We use Notion or Linear depending on your preference. One active request is worked on at a time, in the order received.",
  },
  {
    question: "What if I don't like the initial design direction?",
    answer:
      "Standard plan includes 2 revision rounds; Premium plan includes unlimited revisions until you're satisfied. We rarely need more than two rounds because we invest heavily in the discovery and strategy phase upfront.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a full refund within 48 hours of starting if you decide we're not the right fit. After work begins, refunds are not available — but we're committed to staying with the project until it meets the agreed brief.",
  },
];

export default function FAQ() {
  return (
    <section className="section-pad bg-page" id="faq">
      <div className="container-site">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="paren-label mb-4">(FAQ)</p>
            <h2 className="text-display text-4xl lg:text-5xl font-extrabold text-[#111] mb-6">
              Common Questions
            </h2>
            <p className="text-sm text-[#666] leading-relaxed">
              Didn't find your answer?{" "}
              <a href="mailto:franklin@agero.com" className="underline underline-offset-3 hover:text-accent transition-colors">
                Send us an email
              </a>.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion items={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
