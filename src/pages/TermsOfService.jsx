import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <section className="pt-40 pb-24 lg:pt-48 bg-dark min-h-screen">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-xs text-cream/30 tracking-widest uppercase block mb-6">
            Legal
          </span>
          <h1 className="text-display text-5xl lg:text-6xl font-normal text-cream mb-8">
            Terms of Service
          </h1>

          <div className="space-y-8 text-cream/55 text-sm leading-relaxed">
            <div>
              <p className="text-xs text-cream/25 mb-4">Last updated: 22 May 2025</p>
              <p>
                Please read these terms carefully before engaging Agero Studio for design services. By using our services, you agree to be bound by these terms.
              </p>
            </div>

            {[
              {
                title: "Services",
                content:
                  "Agero Studio provides design services including web design, brand design, and logo design as described on our website. The scope of each project is defined in a separate project agreement or statement of work.",
              },
              {
                title: "Payment",
                content:
                  "Payment terms are outlined in each project agreement. Standard plan projects require payment in advance. Premium plan projects may be structured with a deposit and milestone payments. All fees are non-refundable after work commences, except as outlined in our refund policy.",
              },
              {
                title: "Intellectual property",
                content:
                  "Upon receipt of full payment, you own the final deliverables. We retain the right to showcase the work in our portfolio unless otherwise agreed in writing.",
              },
              {
                title: "Revisions",
                content:
                  "Revision allowances are specified per plan: Standard includes 2 rounds, Premium includes unlimited revisions. Revisions outside the agreed scope may incur additional charges.",
              },
              {
                title: "Limitation of liability",
                content:
                  "Agero Studio's liability is limited to the total fees paid for the relevant project. We are not liable for indirect or consequential damages arising from the use of our deliverables.",
              },
              {
                title: "Governing law",
                content:
                  "These terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales.",
              },
              {
                title: "Contact",
                content:
                  "For any questions about these terms, please contact us at franklin@agero.com.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-base font-medium text-cream mb-2">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
