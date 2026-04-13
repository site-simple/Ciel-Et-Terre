"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Skip scroll to top if there's a hash anchor (let the target handle positioning)
    if (window.location.hash) return;

    const scrollToTop = () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "smooth";
      });
    };

    // Use View Transitions API if available (progressive enhancement)
    if (document.startViewTransition) {
      document.startViewTransition(scrollToTop);
    } else {
      const timeout = setTimeout(scrollToTop, 50);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return null;
}
