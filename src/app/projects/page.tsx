import React from "react";

export default function ProjectsPage() {
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
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Bohdan Martyniuk
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Other work
          </h1>
          <p className="mt-6 max-w-prose text-sm leading-relaxed text-slate-400">
            I trimmed the old project table—years of client URLs and demos that
            no longer represent what&apos;s live. Featured work on the home page
            includes{" "}
            <a
              href="https://tryv14.youthandearth.com/"
              className="font-medium text-blue-300 hover:text-blue-200 focus-visible:text-blue-200"
              target="_blank"
              rel="noreferrer"
            >
              V14® Longevity Reds
            </a>{" "}
            (
            <a
              href="https://tryv14.youthandearth.com/"
              className="font-medium text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-blue-300 hover:decoration-blue-400/50"
              target="_blank"
              rel="noreferrer"
            >
              https://tryv14.youthandearth.com/
            </a>
            ); the Finom marketing landing page I worked on is preserved as a{" "}
            <a
              href="https://finom-lp-performance.vercel.app/"
              className="font-medium text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-blue-300 hover:decoration-blue-400/50"
              target="_blank"
              rel="noreferrer"
            >
              https://finom-lp-performance.vercel.app/
            </a>{" "}
            archive after the campaign ended; and{" "}
            <a
              href="https://join.era.app"
              className="font-medium text-blue-300 hover:text-blue-200 focus-visible:text-blue-200"
              target="_blank"
              rel="noreferrer"
            >
              ERA
            </a>{" "}
            (
            <a
              href="https://join.era.app"
              className="font-medium text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-blue-300 hover:decoration-blue-400/50"
              target="_blank"
              rel="noreferrer"
            >
              https://join.era.app
            </a>
            ). For experiments and older code,
            use{" "}
            <a
              href="https://github.com/bohdan08"
              className="font-medium text-blue-300 hover:text-blue-200 focus-visible:text-blue-200"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
