"use client";
import React, { useCallback, useEffect, useState } from "react";

export default function useHighlightMenu() {
  const [activeSectionId, setActiveSectionId] = useState("about");

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener(
        "mousemove",
        (e) => {
          const main = document
            .getElementsByTagName("main")[0]
            .getBoundingClientRect().x;

          const newActiveSectionId = document.elementFromPoint(main, e.clientY);
          const closestSectionId = newActiveSectionId?.closest("section")?.id;

          if (closestSectionId) {
            setActiveSectionId(closestSectionId);
          }
        },
        { passive: true }
      );
    }
  }, []); // eslint-disable-line

  const onScroll = useCallback((event: Event) => {
    const { scrollY } = window;

    const main = document
      .getElementsByTagName("main")[0]
      .getBoundingClientRect().x;

    const newActiveSectionId = document.elementFromPoint(main, scrollY);
    const closestSectionId = newActiveSectionId?.closest("section")?.id;
    if (closestSectionId) {
      setActiveSectionId(closestSectionId);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []); // eslint-disable-line

  return activeSectionId;
}
