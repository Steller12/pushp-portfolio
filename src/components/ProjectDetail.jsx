import { useParams, Link } from "react-router-dom";
import { projects } from "../data/Projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-gray-400">Project not found.</p>
        <Link to="/" className="text-sm text-gray-300 hover:underline">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-20">
      <div className="space-y-4">
        <Link to="/" className="text-xs text-gray-500 hover:text-gray-300">
          ← Back to projects
        </Link>

        <h1 className="text-3xl font-semibold text-white">{project.title}</h1>

        <p className="text-gray-400 max-w-xl">{project.tagline}</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500">
          Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {project.description
            .trim()
            .split("\n\n")
            .map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500">
          Design Overview
        </h2>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border border-gray-800 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500">
          Architecture & Decisions
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.architecture.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500">
          Technical Challenges
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.challenges.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6 text-sm">
        {project.github && (
          <a className="text-white hover:underline">GitHub →</a>
        )}
        {project.demo && (
          <a className="text-gray-400 hover:text-white">Live Demo →</a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;
