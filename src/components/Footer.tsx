import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__links">
          <div className="footer__pages">
            <h3 className="footer__pages__title">Pages</h3>
            <ul className="footer__pages__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <h3 className="footer__social__title">Social</h3>
            <ul className="footer__social__links">
              <li>
                <a href="https://github.com/karimsherief" target="_blank">
                  <i className="fa-brands fa-github" />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/karimsherief/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in" />
                  Linkedin 
                </a>
              </li>
              <li>
                <a href="mailto:sheriefkarim@gmail.com">
                  <i className="fa-solid fa-envelope" />
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__logo">
            <h1>
              &lt;<span>Karim</span>/&gt;
            </h1>
          </div>
        </div>
        <div className="footer__text">
          <p>
            Made with 💚 by <span>Karim</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
