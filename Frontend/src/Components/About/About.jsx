import React, { useEffect } from "react";

import Headings from "../Headings/Headings";
import HoverImage from "../../AnimationComponents/HoverImage/HoverImage";
import TextAnimation from "../../AnimationComponents/TextAnimation/TextAnimation";
const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col h-screen w-full py-12 wrapper overflow-hidden"
    >
      <Headings heading="About" direction="right" textColor="black" />
      <HoverImage />

      <TextAnimation />
    </div>
  );
};

export default About;
