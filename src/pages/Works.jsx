import { projects } from "../data/projects";
import PageHero from "../components/ui/PageHero";
import ProjectCard from "../components/ui/ProjectCard";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import ContactSection from "../components/sections/ContactSection";

export default function Works() {
  return (
    <>
      <PageHero
        line1={{ text: "Our Work", color: "black" }}
        circle1="from-orange-400 via-red-600 to-rose-800"
        line1accent={{ text: "In Action", color: "orange" }}
        line2={{ text: "Featured", color: "gray" }}
        circle2="from-zinc-500 via-zinc-700 to-zinc-900"
        line2accent={{ text: "Work", color: "black" }}
        subtitle="We've helped businesses across industries achieve their goals. Here are some of our selected works."
        cta={{ label: "View Plans", to: "/services" }}
      />

      <section className="section-pad bg-page">
        <div className="container-site">
          <div className="relative overflow-hidden mb-12">
            <p className="paren-label mb-3">(Portfolio)</p>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111]">All Projects</h2>
          </div>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </section>

      <Pricing />
      <FAQ />
      <ContactSection />
    </>
  );
}
