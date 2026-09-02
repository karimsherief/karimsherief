import Image from "next/image";

type Project = {
  num: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
};

const PROJECTS: Project[] = [
  {
    num: "01",
    category: "Engineering Consulting",
    title: "Hamdy Shehab",
    description:
      "A portfolio website for an engineering consultancy, built for clarity and credibility.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/projects/hamdy-shehab.webp",
    url: "https://hamdyshehab.com/",
  },
  {
    num: "02",
    category: "Barber Shop",
    title: "Waleed Aljizery Salon",
    description:
      "A website for a barber shop, designed to showcase services and attract new clients. support payment integration and booking system.",
    tags: ["Next.js", "Tailwind CSS", "Paymob"],
    image: "/projects/waleed-aljezery.webp",
    url: "https://waleedaljezery.com",
  },
  {
    num: "03",
    category: "E-commerce",
    title: "Fresh Cart",
    description:
      "A website for an e-commerce store, designed to showcase products and facilitate sales. support payment integration and inventory management.",
    tags: ["Next.js", "Bootstrap", "Stripe"],
    image: "/projects/fresh-cart.webp",
    url: "https://karimsherief.github.io/freshcart/",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-[72px] md:py-[110px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="mt-2 font-display text-[28px] font-medium md:text-[38px]">
              A few recent builds.
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] text-text-dim">
            More projects coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {PROJECTS.map((project) => {
            const CardInner = (
              <>
                <div className="relative h-[180px] overflow-hidden bg-bg-soft">
                  <Image
                    src={project.image}
                    alt={`${project.title} — website screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-[22px] pb-6 pt-[22px]">
                  <div className="mb-2.5 font-mono text-[11px] text-text-faint">
                    {project.num} / {project.category}
                  </div>
                  <h3 className="mb-2 text-[19px] font-medium">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-[13.5px] text-text-dim">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-[9px] py-1 font-mono text-[10.5px] text-text-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <span className="font-mono text-[11.5px] text-accent">
                        Visit →
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            const cardClasses =
              "group overflow-hidden rounded-[10px] border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent";

            return project.url ? (
              <a
                key={project.num}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {CardInner}
              </a>
            ) : (
              <div key={project.num} className={cardClasses}>
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
