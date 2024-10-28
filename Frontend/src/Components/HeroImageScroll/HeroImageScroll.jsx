import React, { useRef } from "react";
import { useHeroImageAnimation } from "./util";

function HeroImageScroll() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useHeroImageAnimation(boxRef, textRef);

  return (
    <div className="flex w-full h-screen bg-[#f1f1f1]">
      <div
        className="flex w-[80%] h-[80%] m-auto bg-white rounded-lg"
        ref={boxRef}
      >
        <div className="flex heading m-auto" ref={textRef}>
          <h1 className="uppercase max-w-[10ch] font-bold leading-none md:leading-none tracking-tighter">
            Aiming for clearer, faster, and simpler.
          </h1>
        </div>
      </div>

      <div className="scroll-btn"></div>
    </div>
  );
}

export default HeroImageScroll;
