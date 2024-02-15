import Image from "next/image";
import React from "react";

const PROJECTS_LIST = [
  // {
  //   title: "TheTenn",
  //   link: "https://www.thetenn.com",
  //   description: `Web app (20,000+ unique users) 
  //                 that promotes a new financial system in the USA.`,

  //   imgLink: "/thetenn.webp",
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "JavaScript",
  //     "TypeScript",
  //     "Tailwind",
  //     "Firebase",
  //     "Mailchimp",
  //   ],
  // },
  {
    title: "Olympic Combat",
    link: "https://www.olympiccombat.io",
    description: `Web app (1,000+ unique users) that promotes martial arts for kids in Dubai.`,
    imgLink: "/olympicCombat.webp",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Mailchimp",
    ],
  },
  {
    title: "Pesto",
    link: "https://join.getpesto.com",
    description: `The first credit card that can be secured with valuables or cash as collateral.`,
    imgLink: "/pesto.png",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
  },
  {
    title: "ProEmailer",
    link: "https://pro-stack-landing-page.vercel.app",
    description: `AI powered startup that helps people to handle their emails.`,
    imgLink: "/proStack.webp",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Mailchimp",
    ],
  },
];

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
        <ul className="group/list">
          {PROJECTS_LIST.map(
            ({ title, link, description, technologies, imgLink }) => (
              <li key={title} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300  group/link text-base"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={title}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {title}{" "}
                          <span className="inline-block">
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
                          </span>
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
                  <div>
                    <Image
                      src={imgLink}
                      alt=""
                      width={200}
                      height={100}
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View More Projects"
            href="/projects"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
                View More Projects{" "}
              </span>
              <span className="whitespace-nowrap">
                {/* <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
                  Archive
                </span> */}
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
