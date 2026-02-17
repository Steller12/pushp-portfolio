import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiGit,
  SiLinux,
  SiGooglecloud,
} from "react-icons/si";

import { techStack } from "../data/TechStack";

const iconMap = {
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  SQL: SiPostgresql,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Linux: SiLinux,
  GCP: SiGooglecloud,
};

function TechStack() {
  return (
    <section className="max-w-3xl mx-auto px-6 mt-16">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-10">
        Tech Stack
      </h2>

      <div
        className="
    flex items-center gap-6
    overflow-x-auto
    pb-2
    scrollbar-hide
  "
      >
        {techStack.map((tech) => {
          const Icon = iconMap[tech];

          return (
            <div
              key={tech}
              className="
          group
          flex flex-col items-center
          text-gray-500
          transition-colors duration-300
          hover:text-gray-200
          shrink-0
        "
            >
              <Icon size={22} />

              <span
                className="
            mt-1 text-xs
            opacity-0 translate-y-1
            transition-all duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            whitespace-nowrap
          "
              >
                {tech}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TechStack;
