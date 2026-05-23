import PageHero from "../components/ui/PageHero";
import IntroStatement from "../components/sections/IntroStatement";
import FounderSection from "../components/sections/FounderSection";
import Awards from "../components/sections/Awards";
import ContactSection from "../components/sections/ContactSection";
import ClientStrip from "../components/sections/ClientStrip";

export default function About() {
  return (
    <>
      <PageHero
        line1={{ text: "Meet Agero", color: "black" }}
        circle1="from-teal-500 via-cyan-700 to-blue-900"
        line1accent={{ text: "Bold Ideas", color: "orange" }}
        line2={{ text: "Real Impact", color: "gray" }}
        circle2="from-green-600 via-emerald-700 to-zinc-900"
        line2accent={{ text: "Driven", color: "black" }}
        subtitle="Shaping next-gen experiences through design, tech, and purpose. At Agero innovation isn't just a buzzword — it's our foundation."
        cta={{ label: "View Projects", to: "/works" }}
      />
      <ClientStrip />
      <IntroStatement />
      <FounderSection />
      <Awards />
      <ContactSection />
    </>
  );
}
