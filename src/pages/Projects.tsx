import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section className="projects__page">
      <div className="container">
        <div className="projects__page__title">
          <h2>
            Projects
            <i className="fa-solid fa-code" />
          </h2>
          <p>
            I've built cool websites using anything from HTML to React. Here are
            some of my favorite projects over the course of my journey.
          </p>
        </div>
        <div className="projects__cards__group">
          {PROJECTS.map((repo, index) => (
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
        <p className="projects__page__more">
          Thats not all... I've got even more on{" "}
          <a
            href="https://github.com/karimsherief?tab=repositories"
            target="_blank"
          >
            My GitHub
          </a>
          !
        </p>
      </div>
    </section>
  );
}
