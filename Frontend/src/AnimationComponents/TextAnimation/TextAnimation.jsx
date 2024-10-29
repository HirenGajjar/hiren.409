// AnimatedText.js
import React, { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  useEffect(() => {
    // Split the text into lines
    const split = new SplitType(".animate", {
      types: "lines",
      tagName: "span",
    });

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate",
        start: "top center",
        // End animation when the entire element is scrolled past
        end: "bottom center",
        scrub: true, // Sync animation with scrolling
        markers: false, // Set to true to see markers during development
      },
    });

    // Animate each line on scroll
    tl.from(".animate .line", {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine.inOut",
      stagger: 0.1,
    });

    return () => {
      split.revert(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="flex items-center justify-center  max-w-[90%]  h-[80%]">
      <div className="max-w-2xl text-left">
        <h1 className="animate  ">
          This is an animated text example. It has 40 words to demonstrate how
          the text animates as you scroll. Each line fades in and moves up
          slightly, creating a smooth visual effect. Enjoy the scroll!
        </h1>
      </div>
    </div>
  );
};

export default TextAnimation;
