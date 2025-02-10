import React from "react";
import { HIGH_LIGHT_TEXT_STYLE, LINK_STYLE } from "./styles";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="bg-brand-blue sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I&apos;m a developer passionate about creating web products and
          delivering smooth digital experiences.
        </p>
        <p className="mb-4">
          In 2019 I landed my first full time job at{" "}
          <a
            className={LINK_STYLE}
            href="https://www.mpac.ca"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            MPAC
          </a>
          . Since then, I&apos;ve been fortunate to contribute my skills to
          impactful projects for{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>
            {" "}
            the government non-profit organization
          </span>
          ,<span className={HIGH_LIGHT_TEXT_STYLE}> major Canadian banks</span>,
          and <span className={HIGH_LIGHT_TEXT_STYLE}> exciting startups</span>.
          Currently, I&apos;m involved in building web products at
          <a
            className={LINK_STYLE}
            href="https://www.scotiabank.com/ca/en/personal.html"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Scotiabank
          </a>
          .
        </p>
      </div>
    </section>
  );
}
