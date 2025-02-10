import React from "react";

export default function Projects() {
  return (
    <div className="relative text-white">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <a
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-blue-300"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Bohdan Martyniuk
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>
          <table
            id="content"
            className="mt-12 w-full border-collapse text-left"
          >
            {/* bg-slate-600/75 border-slate-300/1 backdrop-blur*/}
            <thead className="sticky top-0 z-10 border-b px-6 py-5 bg-[#151617] shadow">
              <tr>
                {HEADER_LIST.map((header) => (
                  <th
                    key={header.toLowerCase()}
                    className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROJECTS_LIST.map(
                ({ year, project, technologies, link, source }) => (
                  <tr
                    key={project.toLowerCase()}
                    className="border-b border-slate-300/10 last:border-none"
                  >
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">{year}</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>
                        <div className="block sm:hidden">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 hover:text-slate-200 focus-visible:text-blue-300 sm:hidden group/link text-base"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Screentime 2.0"
                          >
                            <span>
                              {project}{" "}
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
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="hidden sm:block">{project}</div>
                      </div>
                    </td>
                    {/* <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                      <div className="translate-y-px whitespace-nowrap">
                        Starry
                      </div>
                    </td> */}
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap max-w-[300px]">
                        {technologies.map((technology) => (
                          <li key={technology} className="my-1 mr-1.5">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                              {technology}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="translate-y-1">
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-blue-300 group/link text-sm"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="starry.com"
                          >
                            {" "}
                            <span className="inline-block">
                              {link}
                              {link && <ArrowIcon />}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      {" "}
                      {source.link && (
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-blue-300 group/link text-sm"
                          href={source.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="starry.com"
                        >
                          {" "}
                          <span className="inline-block">
                            {source.provider}
                            <ArrowIcon />
                          </span>
                        </a>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const HEADER_LIST = ["Year", "Project", "Tech", "Link", "Source"];

const PROJECTS_LIST = [
  {
    year: 2024,
    project: "ERA",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "A/B testing",
      "Amplitude Analytics",
    ],
    link: "https://join.era.app",
    source: {
      provider: "",
      link: "",
    },
  },
  {
    year: 2024,
    project: "GoldRepublic",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Contentful",
      "Google Analytics",
      "A/B Testing",
    ],
    link: "https://uk.goldrepublic.com",
    source: {
      provider: "",
      link: "",
    },
  },
  {
    year: 2024,
    project: "Pesto",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
    link: "https://join.getpesto.com",
    source: {
      provider: "",
      link: "",
    },
  },
  {
    year: 2024,
    project: "Workout Tracker",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    link: "https://www.fittrackmate.com",
    source: {
      provider: "Github",
      link: "https://github.com/Bohdan08/workout-tracker",
    },
  },
  {
    year: 2024,
    project: "Sphiros",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    link: "https://www.sphiros.com",
    source: {
      provider: null,
      link: null,
    },
  },
  {
    year: 2023,
    project: "Management App",
    technologies: ["React", "JavaScript", "Bootstrap", "Graphql", "Mongodb"],
    // link: "https://illustrious-puppy-712788.netlify.app",
    link: "",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/graphql-management-app",
    },
  },
  {
    year: 2023,
    project: "Personal Portfolio V3",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://www.bohdanmartyniuk.com",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/v3",
    },
  },
  {
    year: 2023,
    project: "Olympic Combat [Main]",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    link: "https://olympiccombat.io",
    source: {
      provider: null,
      link: null,
    },
  },
  {
    year: 2023,
    project: "Olympic Combat [Join]",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    link: "https://join.olympiccombat.io",
    source: {
      provider: null,
      link: null,
    },
  },
  {
    year: 2023,
    project: "ProEmailer",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    link: "https://pro-stack-landing-page.vercel.app",
    source: {
      provider: null,
      link: null,
    },
  },
  {
    year: 2023,
    project: "Text Classifier",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Transformers.js"],
    link: "https://hugging-face-model.vercel.app",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/hugging-face-model",
    },
  },
  {
    year: 2022,
    project: "TheTenn",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    link: "https://www.thetenn.com",
    source: {
      provider: null,
      link: null,
    },
  },
  {
    year: 2021,
    project: "Personal Portfolio V2",
    technologies: ["React", "Gatsby", "JavaScript", "Tailwind CSS"],
    link: "https://www.bohdanmartyniukv2.com",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/portfolioV2",
    },
  },
  {
    year: 2021,
    project: "CREA",
    technologies: [
      "Next.js",
      "React",
      "Redux",
      "JavaScript",
      "SASS",
      "Amplify",
      "AWS",
    ],
    link: "",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/crea",
    },
  },
  {
    year: 2021,
    project: "Business Finder",
    technologies: [
      "Next.js",
      "React",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Yelp API",
    ],
    link: "https://business-finder.vercel.app",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/business-finder",
    },
  },
  {
    year: 2020,
    project: "English With Love [Mobile]",
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "Firebase",
      "NativeBase",
      "Semantic UI",
      "Reanimated",
    ],
    link: "",
    source: {
      provider: "Gitlab",
      link: "https://gitlab.com/Bohdan881/ewl_react_native",
    },
  },
  {
    year: 2020,
    project: "English With Love",
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "Firebase",
      "Redux-Persist",
      "Semantic UI",
    ],
    link: "https://ewl-staging.web.app",
    source: {
      provider: "Gitlab",
      link: "https://gitlab.com/Bohdan881/in_english_with__love",
    },
  },
  {
    year: 2020,
    project: "Personal Portfolio V1",
    technologies: ["Vue", "JavaScript", "Bootstrap", "HTML", "CSS/SCSS"],
    link: "https://portfolio-49bce.firebaseapp.com",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/portfolio",
    },
  },
  {
    year: 2020,
    project: "Koruja",
    technologies: ["React", "JavaScript", "Semantic UI", "HTML", "CSS/SCSS"],
    link: "https://korujashop.com",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/korujaproject",
    },
  },
  {
    year: 2019,
    project: "Sprint retrospective",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Socket.IO",
      "HTML",
      "SASS",
    ],
    link: "",
    source: {
      provider: "Github",
      link: "https://github.com/bohdan08/socketReactJsChat",
    },
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
