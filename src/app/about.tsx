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
            href="https://www.manulife.ca"
            target="_blank"
            rel="noreferrer"
          >
            Manulife
          </a>
          , working across{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>
            Forgerock deployments
          </span>
          , <span className={HIGH_LIGHT_TEXT_STYLE}>Kubernetes</span>,{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>Terraform</span>, UI
          leadership, and automation including{" "}
          <span className={HIGH_LIGHT_TEXT_STYLE}>WebdriverIO</span>. I use
          modern AI tooling day to day to move faster on design, code, and
          validation while keeping ownership of architecture and production
          behavior.
        </p>
        <p className="mb-4">
          Earlier roles spanned{" "}
          <a
            className={LINK_STYLE}
            href="https://www.scotiabank.com"
            target="_blank"
            rel="noreferrer"
          >
            Scotiabank
          </a>
          ,{" "}
          <a
            className={LINK_STYLE}
            href="https://www.bmo.com"
            target="_blank"
            rel="noreferrer"
          >
            BMO
          </a>
          , and{" "}
          <a
            className={LINK_STYLE}
            href="https://www.mpac.ca"
            target="_blank"
            rel="noreferrer"
          >
            MPAC
          </a>{" "}
          across public sites, banking experiences, and data-heavy internal
          products.
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
          is foundational context for me; day to day I lean more on K8s,
          Terraform, and the CIAM stack above.
        </p>
      </div>
    </section>
  );
}
