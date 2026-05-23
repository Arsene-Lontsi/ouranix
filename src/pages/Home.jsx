import Hero from "../components/sections/Hero";
import ProjectsShowcase from "../components/sections/ProjectsShowcase";
import ClientStrip from "../components/sections/ClientStrip";
import MarqueeSection from "../components/sections/MarqueeSection";
import IntroStatement from "../components/sections/IntroStatement";
import Testimonials from "../components/sections/Testimonials";
import RecentWorks from "../components/sections/RecentWorks";
import ServicesPreview from "../components/sections/ServicesPreview";
import FounderSection from "../components/sections/FounderSection";
import Awards from "../components/sections/Awards";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsShowcase />
      <ClientStrip />
      <MarqueeSection />
      <IntroStatement />
      <Testimonials />
      <RecentWorks />
      <ServicesPreview />
      <FounderSection />
      <Awards />
      <Pricing />
      <FAQ />
      <ContactSection />
    </>
  );
}
