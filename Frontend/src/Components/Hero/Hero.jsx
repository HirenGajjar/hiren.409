import React from "react";
import CenterImage from "../CenterImage/CenterImage.jsx";
import ParallaxImages from "../ParallaxImages/ParallaxImages.jsx";

const SECTION_HEIGHT = 3000;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full bg-white"
    >
      <CenterImage />

      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

export default Hero;
