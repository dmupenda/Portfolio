
import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <NavLink to="/" end className="brand">
          Portfolio
        </NavLink>

        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Portfolio | Web Technologies | Fall 2026</p>
      </footer>
    </>
  );
}
