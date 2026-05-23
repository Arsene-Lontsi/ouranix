import PageHero from "../components/ui/PageHero";
import ContactSection from "../components/sections/ContactSection";
import FAQ from "../components/sections/FAQ";

export default function Contact() {
  return (
    <>
      <PageHero
        line1={{ text: "Let's Build", color: "black" }}
        circle1="from-accent via-orange-700 to-red-900"
        line1accent={{ text: "Together", color: "orange" }}
        line2={{ text: "Start a", color: "gray" }}
        circle2="from-slate-500 via-zinc-700 to-zinc-900"
        line2accent={{ text: "Project", color: "black" }}
        subtitle="Tell us about your project. We respond within 24 hours and offer a free 30-minute discovery call."
        cta={{ label: "View Plans", to: "/services" }}
      />
      <ContactSection />
      <FAQ />
    </>
  );
}
