import React from "react";

const GITHUB = "https://github.com/bohdan08";

type FeaturedProject = {
  id: string;
  title: string;
  href: string;
  description: string;
  technologies: string[];
  thumbSrc: string;
  thumbLabel: string;
  /** Shown as a small label when the public site is no longer the canonical URL */
  archive?: boolean;
};

const FEATURED: FeaturedProject[] = [
  {
    id: "v14",
    title: "V14® Longevity Reds",
    href: "https://tryv14.youthandearth.com/",
    description:
      "High-conversion longevity supplement storefront for Youth & Earth: product storytelling, subscriptions, and performance work that has stayed live and stable.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "E-commerce",
    ],
    thumbSrc: "/v14-icon.svg",
    thumbLabel: "Open V14 storefront",
  },
  {
    id: "finom",
    title: "Finom (marketing landing)",
    href: "https://finom-lp-performance.vercel.app/",
    description:
      "A high-impact EU fintech marketing page: bold typography, video hero, trust metrics, testimonials, and pricing, tuned for performance and conversion. The campaign has wrapped and the main site has moved on; this Vercel deployment preserves the experience I shipped.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Video",
      "Performance",
    ],
    thumbSrc: "/finom-logo.png",
    thumbLabel: "Open Finom landing (archive)",
    archive: true,
  },
  {
    id: "era",
    title: "ERA",
    href: "https://join.era.app",
    description:
      "AI budgeting and money platform: onboarding, core product flows, experimentation, and analytics.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "A/B testing",
      "Amplitude",
    ],
    thumbSrc: "/polygon-preview.svg",
    thumbLabel: "Open ERA",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="bg-brand-blue sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <p className="mb-8 max-w-prose text-sm leading-normal text-slate-500">
          Live products plus one retired campaign I still host on Vercel so the
          work stays viewable. Older experiments and repos are on{" "}
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-400 underline decoration-slate-600 underline-offset-2 transition hover:text-blue-300 hover:decoration-blue-400/50"
          >
            GitHub
          </a>
          .
        </p>
        <ul className="group/list">
          {FEATURED.map(
            ({
              id,
              title,
              href,
              description,
              technologies,
              thumbSrc,
              thumbLabel,
              archive,
            }) => (
              <li key={id} className="mb-12">
                <div className="group relative grid gap-6 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${title} (opens in new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span>{title}</span>
                          {archive ? (
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                              Vercel archive
                            </span>
                          ) : null}
                          <ExternalLinkIcon />
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{description}</p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {technologies.map((technology) => (
                        <li className="mr-1.5 mt-2" key={technology}>
                          <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                            {technology}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="z-10 sm:order-1 sm:col-span-2 sm:flex sm:justify-start">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-5 ring-1 ring-slate-200/10 transition group-hover:ring-slate-200/25"
                      aria-label={thumbLabel}
                    >
                      <img
                        src={thumbSrc}
                        alt=""
                        width={72}
                        height={72}
                        className="h-[4.5rem] w-[4.5rem] object-contain drop-shadow-md"
                      />
                    </a>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
        <div className="mt-8">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="Bohdan Martyniuk on GitHub"
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
                GitHub profile
              </span>
              <span className="whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
