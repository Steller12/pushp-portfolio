import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      Projects
      {projects.map((project) => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>
            <strong>Tech:</strong>
            {project.tech}
          </p>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
