import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/" className="nav__logo">
            &lt;<span>Karim</span>/&gt;
          </NavLink>
          <ul className="nav__list">
            <li>
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="projects" className="nav__link">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
