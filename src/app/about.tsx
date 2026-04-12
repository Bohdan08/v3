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
          I&apos;m a full-stack engineer who ships identity and access platforms
          end to end: infrastructure, integrations, UI quality, and reliable
          releases, not only front-of-house features.
        </p>
        <p className="mb-4">
          Today I&apos;m on the{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>CIAM</span> team at{" "}
          <a
            className={LINK_STYLE}
            href="https://www.linkedin.com/company/manulife-financial/"
            target="_blank"
            rel="noreferrer"
          >
            Manulife
          </a>
          . Most of my time goes into product engineering with{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>React</span>,{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>Next.js</span>, and{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>Node.js</span>
          : features, internal tools, and UI quality alongside platform work
          in <span className={HIGH_LIGHT_TEXT_STYLE}>Kubernetes</span> and{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>Terraform</span>, plus test
          automation with{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>WebdriverIO</span>. I use
          modern AI tooling day to day to move faster on design, code, and
          validation while still owning architecture and how things behave in
          production.
        </p>
        <p className="mb-4">
          Earlier roles at{" "}
          <a
            className={LINK_STYLE}
            href="https://www.linkedin.com/company/scotiabank/"
            target="_blank"
            rel="noreferrer"
          >
            Scotiabank
          </a>
          ,{" "}
          <a
            className={LINK_STYLE}
            href="https://www.linkedin.com/company/bank-of-montreal/"
            target="_blank"
            rel="noreferrer"
          >
            BMO
          </a>
          , and{" "}
          <a
            className={LINK_STYLE}
            href="https://www.linkedin.com/company/mpac"
            target="_blank"
            rel="noreferrer"
          >
            MPAC
          </a>{" "}
          covered public sites, core banking experiences, and data-heavy
          internal products.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">
          Certifications (recent):{" "}
          <span className="text-slate-400">
            Certified Kubernetes Application Developer (CKAD)
          </span>
          ;{" "}
          <span className="text-slate-400">
            AWS Certified Solutions Architect – Associate
          </span>{" "}
          and{" "}
          <span className="text-slate-400">AWS Cloud Practitioner</span>. AWS
          gives useful context; in practice I spend more time on Kubernetes,
          Terraform, and the React, Next.js, and Node.js work described above.
        </p>
      </div>
    </section>
  );
}
