
import { Link } from "react-router";

export function Home() {
  return (
    <section className="hero">
    <div className="profile-container">
      <img
        className="profile-photo"
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt="Profile photo"
      />
      <p className="profile-name"> Darcy M</p>
    </div>
    
      <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

      <h1>Hi, WELCOME TO MY PORTFOLIO.</h1>

      <p className="intro">
        I'm developing my skills in software development,
        web technologies, and software testing through
        coursework and practical projects.
      </p>

      <Link className="button primary" to="/projects">
        View my projects
      </Link>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience &amp; Education</h1>

      <h2>Education</h2>
      <p>
        Computer science coursework at Saint Louis University.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git and GitHub</li>
        <li>Automated testing with Jest</li>
        <li>HTTP and web measurements</li>
      </ul>

      <h2>Relevant Experience</h2>

      <article className="highlight-card">
        <h3>Software Testing Coursework</h3>
        <p>
          Wrote unit tests for mathematical utility functions,
          covering expected behavior and failure cases.
        </p>
      </article>

      <article className="highlight-card">
        <h3>Web Measurements Coursework</h3>
        <p>
          Used curl to examine HTTP responses, request headers,
          cookies, and differences in server behavior.
        </p>
      </article>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        Thank you for visiting my portfolio.
        You can explore my projects to learn more about my work.
      </p>

      <p>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub
        </a>
      </p>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}
