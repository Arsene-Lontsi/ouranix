import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import Watermark from "../ui/Watermark";

export default function RecentWorks({ limit = 3 }) {
  const displayed = projects.slice(0, limit);

  return (
    <section className="relative section-pad bg-page overflow-hidden">
      <Watermark text="Recent Works" />

      <div className="container-site relative z-10 pt-16">
        {/* Label + heading */}
        <div className="mb-12">
          <p className="paren-label mb-3">(Selected Works)</p>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111]">Recent Works</h2>
        </div>

        {displayed.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={displayed.length}
          />
        ))}

        <div className="flex justify-center mt-8">
          <Link to="/works" className="btn-dark">
            View All Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
