import { PROJECTS } from "@/data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="special-heading">
          Here are a few of my favorite projects.
        </h2>
        <div className="projects__cards__group">
          {PROJECTS.slice(0, 3).map((repo, index) => (
            <div
              key={repo.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="project__card"
            >
              <a href={repo.homepage} target="_blank">
                <div className="project__card__image">
                  <img src={repo.img} width={100} loading="lazy" />
                </div>
                <div className="project__card__body">
                  <div className="project__card__header">
                    <h3 className="project__card__title">{repo.name}</h3>
                    <ul className="project__card__links">
                      <li>
                        <a href={repo.html_url}>
                          <i className="fa-brands fa-github" />
                        </a>
                      </li>
                      <li>
                        <a href={repo.homepage}>
                          <i className="fa-solid fa-up-right-from-square" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="project__card__description">
                    {repo.description}
                  </p>
                  <div className="project__card__tags">
                    {repo.topics.map((topic) => (
                      <span key={topic} className="project__card__tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <Link to="projects" className="projects__view__more">
          View More
        </Link>
      </div>
    </section>
  );
}
