
import { useState } from "react";
import { useSearchParams } from "react-router";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const applied = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(applied);

  const normalized = applied.trim().toLowerCase();

  const visible = projects.filter((project) =>
    `${project.title} ${project.category} ${project.technologies.join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  function handleSubmit(event) {
    event.preventDefault();

    const next = new URLSearchParams(searchParams);

    if (query.trim()) {
      next.set("q", query.trim());
    } else {
      next.delete("q");
    }

    setSearchParams(next);
  }

  function handleClear() {
    setQuery("");
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      next.delete("q");
      return next;
    });
  }

  return (
    <section>
      <h1>Projects</h1>
      <p>Explore my coursework and development projects.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="project-search">
          Filter by title, category, or technology
        </label>

        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <button className="button primary" type="submit">
          Apply filter
        </button>

        <button className="button secondary" type="button" onClick={handleClear}>
          Clear filter
        </button>
      </form>

      <p role="status">{visible.length} project(s) found</p>
      <p>Applied filter: {applied || "None"}</p>

      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects match. Try another search.</p>
      )}
    </section>
  );
}
