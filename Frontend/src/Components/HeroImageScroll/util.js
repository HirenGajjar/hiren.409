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
      { width: "10%", height: "10%" },
      {
        width: "80%",
        height: "80%",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      textElement,
      { fontSize: "2rem" },
      {
        fontSize: "8rem",
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
      { fontSize: "8rem" },
      {
        fontSize: "0",
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, [boxRef, textRef]);
};
