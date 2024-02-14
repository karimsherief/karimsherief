import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="skills__content">
          <h2>
            here some of my skllis
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </h2>
          <div className="skills__card__group">
            {SKILLS.map((skill) => (
              <div className="skill__card" key={skill.name}>
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
