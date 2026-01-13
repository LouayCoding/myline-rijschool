"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPReveal(options: {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options.start || "top 85%",
          end: options.end || "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [options.start, options.end]);

  return ref;
}

export function useGSAPStagger(delay: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !ref.current) return;

    const children = ref.current.children;
    const ctx = gsap.context(() => {
      gsap.from(children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [delay]);

  return ref;
}
