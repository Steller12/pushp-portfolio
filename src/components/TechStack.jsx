import { techStack } from "../data/TechStack";

function TechStack() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h2>Tech Stack</h2>

      <h3>Languages</h3>
      <ul>
        {techStack.languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Backend & Systems</h3>
      <ul>
        {techStack.backend.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Databases</h3>
      <ul>
        {techStack.databases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Tools & Practices</h3>
      <ul>
        {techStack.tools.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default TechStack;
