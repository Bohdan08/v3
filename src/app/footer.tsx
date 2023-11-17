import React from "react";
import { LINK_STYLE } from "./styles";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Built this website after I&apos;ve got an inspiration from{" "}
        <a
          href="https://brittanychiang.com"
          className="font-medium text-slate-400 hover:text-blue-300 focus-visible:text-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          Brittany Chiang
        </a>
        .{" "}
      </p>
      <p>
        Utilized{" "}
        <a
          href="https://nextjs.org/"
          className={LINK_STYLE}
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className={LINK_STYLE}
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className={LINK_STYLE}
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className={LINK_STYLE}
          target="_blank"
          rel="noreferrer"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
