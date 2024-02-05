"use client";
import React, { useEffect, useState } from "react";
import { TagsMobile } from "./TagsMobile";
import { Tags } from "./Tags";

export function TagComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1250px)");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div>{isMobile ? <TagsMobile /> : <Tags />}</div>;
}
