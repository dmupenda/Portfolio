
export const projects = [
  {
    slug: "math-unit-tests",
    title: "Math Utility Unit Tests",
    category: "Software Testing",
    technologies: ["JavaScript", "Jest", "Git"],
    summary:
      "A unit-testing project covering mathematical utility functions.",
    problem:
      "Utility functions need tests to check expected behavior and edge cases.",
    role:
      "Created unit tests for the project's math utilities.",
    approach:
      "Organized tests by function and checked successful and failure cases.",
    outcome:
      "The test suite passed 22 tests, providing checks for the utility functions."
  },
  {
    slug: "web-measurements",
    title: "Web Measurements",
    category: "Web Technologies",
    technologies: ["curl", "HTTP", "HTML"],
    summary:
      "An investigation of how request settings affect web responses.",
    problem:
      "Web servers may respond differently depending on request headers and cookies.",
    role:
      "Ran requests and recorded response headers and HTML for comparison.",
    approach:
      "Compared baseline requests with User-Agent, Accept-Language, and cookie tests.",
    outcome:
      "Observed HTTP 403 protection responses and documented the results."
  },
  {
    slug: "react-portfolio",
    title: "React Portfolio Website",
    category: "Web Development",
    technologies: ["React", "Vite", "React Router"],
    summary:
      "A personal portfolio website built for the Web Technologies assignment.",
    problem:
      "A portfolio needs to present skills and projects in a clear, navigable format.",
    role:
      "Building the pages, project listings, navigation, and interactive filtering.",
    approach:
      "Using reusable React components, route-based pages, and responsive CSS.",
    outcome:
      "Practicing React development, routing, and preparation for GitHub Pages deployment."
  }
];
