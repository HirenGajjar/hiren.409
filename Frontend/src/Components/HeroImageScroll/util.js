import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroImageAnimation = (boxRef, textRef) => {
  useEffect(() => {
    const boxElement = boxRef.current;
    const textElement = textRef.current;

    gsap.fromTo(
      boxElement,
      { width: "0%", height: "0%" },
      {
        width: "80%",
        height: "80%",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      textElement,
      { fontSize: "0", color: "transparent", y: 0, opacity: 1 },
      {
        fontSize: "8rem",
        color: "black",
        y: -50,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      boxElement,
      { width: "80%", height: "80%" },
      {
        width: "0%",
        height: "0%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textElement,
      { color: "black", y: 0, opacity: 1 },
      {
        color: "transparent",
        y: -50,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxElement,
          start: "top top",
          end: "bottom top",
          scrub: 0.01,
        },
      }
    );
  }, [boxRef, textRef]);
};
