import React from "react";
import CenterImage from "../CenterImage/CenterImage.jsx";
import ParallaxImages from "../ParallaxImages/ParallaxImages.jsx";

const SECTION_HEIGHT = 1000;

const Hero = () => {
  return (
    <div
      style={{
        height: `calc(${SECTION_HEIGHT}px),  padding: 0,    margin: 0  `,
      }}
      className="relative w-full bg-white"
    >
      <CenterImage />

      <ParallaxImages />
    </div>
  );
};

export default Hero;
