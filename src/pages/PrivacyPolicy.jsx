import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <div className="space-y-8 text-cream/55 text-sm leading-relaxed">
            <div>
              <p className="text-xs text-cream/25 mb-4">Last updated: 22 May 2025</p>
              <p>
                Agero Studio ("we", "our", "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or engage our services.
              </p>
            </div>

            {[
              {
                title: "Information we collect",
                content:
                  "We collect information you provide directly to us — such as your name, email address, and project details when you fill out our contact form. We may also collect usage data through analytics tools to understand how visitors interact with our website.",
              },
              {
                title: "How we use your information",
                content:
                  "We use the information we collect to respond to your enquiries, provide our services, improve our website, and communicate with you about projects. We do not sell your personal data to third parties.",
              },
              {
                title: "Cookies",
                content:
                  "Our website may use cookies to improve your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionality.",
              },
              {
                title: "Data retention",
                content:
                  "We retain your personal data only as long as necessary to fulfil the purposes described in this policy, or as required by law.",
              },
              {
                title: "Your rights",
                content:
                  "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please contact us at franklin@agero.com.",
              },
              {
                title: "Contact",
                content:
                  "If you have questions about this policy, please email us at franklin@agero.com.",
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
