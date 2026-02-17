import { Link } from "react-router-dom";
import { projects } from "../data/Projects";
import { useNavigate } from "react-router-dom";

function Projects({ setWipe }) {
  const navigate = useNavigate();

  const handleClick = (project) => {
    setWipe({
      active: true,
      title: project.title,
    });

    setTimeout(() => {
      navigate(`/projects/${project.slug}`);
    }, 700);

    setTimeout(() => {
      setWipe({
        active: false,
        title: "",
      });
    }, 1300);
  };
  return (
    <section className="max-w-3xl mx-auto px-6 mt-20">
      <div className="grid grid-cols-4 gap-4 pb-3 text-xs uppercase tracking-widest text-gray-500">
        <span>Project</span>
        <span>Category</span>
        <span>Client</span>
        <span className="text-right">Year</span>
      </div>

      <div className="border-t border-gray-800">
        {projects.map((project) => (
          <div key={project.slug} className="border-b border-gray-800">
            <div className="perspective h-20">
              <button
                onClick={() => handleClick(project)}
                className="w-full text-left h-20 border-b border-gray-800"
              >
                <div className="flip-card relative h-full">
                  <div className="flip-face absolute inset-0 grid grid-cols-4 gap-4 items-center text-white">
                    <span className="font-medium">{project.title}</span>
                    <span className="text-gray-400">{project.category}</span>
                    <span className="text-gray-400">{project.client}</span>
                    <span className="text-right text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <div className="flip-face flip-back absolute inset-0 grid grid-cols-4 gap-4 items-center bg-neutral-100 text-neutral-900">
                    <span className="font-medium">View Project →</span>
                    <span>{project.category}</span>
                    <span>{project.client}</span>
                    <span className="text-right">{project.year}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
