export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p>Hello, Welcome to my site</p>
        <h1>I'm Karim Sherief</h1>
        <h2>A Front-end Developer</h2>
        <button>Tell me more</button>
      </div>
      <div className="wave hero__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F0F3FF"
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
