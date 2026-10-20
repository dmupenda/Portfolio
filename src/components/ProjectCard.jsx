
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <article className="highlight-card">
      <p className="eyebrow">{project.category}</p>
      <h2>
        <Link to={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      </h2>
      <p>{project.summary}</p>
      <p>
        <strong>Technologies:</strong>{" "}
        {project.technologies.join(", ")}
      </p>
      <Link to={`/projects/${project.slug}`}>
        View project details →
      </Link>
    </article>
  );
}
