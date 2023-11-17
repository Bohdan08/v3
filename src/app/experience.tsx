import React from "react";

const EXPERIENCE_LIST = [
  {
    time: "Dec 2021 – present",
    title: "Full-Stack Software Engineer",
    company: "Scotiabank",
    companyLink: "https://www.scotiabank.com",
    description: `Building and shipping features for Scotiabank web applications,  
                  including Scotiabank Help Centre and Online Booking Appointment.
                  Each web application has over 1M MAU and 
                  loads under 2 seconds with test coverage 
                  over 90%.`,
    projects: [
      { name: "Help Centre", link: "https://help.scotiabank.com" },
      {
        name: "Online Booking App",
        link: "https://hello.scotiabank.com/book/customer-flag",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Contentful CMS",
    ],
  },
  {
    time: "July 2021 – Dec 2021",
    title: "Front-End Software Engineer",
    company: "BMO",
    companyLink: "https://www.bmo.com",
    description: `Built web pages that are responsive and performant for BMO.com 
                  and BMO Harris.com public sites that serve millions 
                  of users on a daily basis by using React.js and TypeScript.`,
    technologies: ["React", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    time: "May 2019 – July 2021",
    title: "Full-Stack Software Engineer",
    company: "MPAC",
    companyLink: "https://www.mpac.ca",
    description: `Developed analytics dynamic dashboards and applications using JavaScript/TypeScript, React, and Redux.`,
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Elasticsearch",
      "AWS",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            {EXPERIENCE_LIST.map(
              ({
                time,
                title,
                company,
                companyLink,
                description,
                projects,
                technologies,
              }) => (
                <li key={company} className="mb-12">
                  {" "}
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2018 to Present"
                    >
                      {time}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300  group/link text-base"
                            href={companyLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${title} at ${company}`}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {title} ·{" "}
                              <span className="inline-block">
                                {company}
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
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        {description}
                      </p>
                      {projects?.length ? (
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Related links"
                        >
                          {projects.map(({ name, link }) => (
                            <li key={name} className="mr-4">
                              <a
                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-blue-300 focus-visible:text-blue-300"
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="mr-1 h-3 w-3"
                                  aria-hidden="true"
                                >
                                  <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                </svg>
                                <span>{name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
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
                  </div>
                </li>
              )
            )}
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
              aria-label="View Full Résumé"
              href="/resume.pdf"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
                  View Full{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
                    Resume
                  </span>
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
    </div>
  );
}
