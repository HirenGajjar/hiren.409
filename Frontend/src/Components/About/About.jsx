import React, { useEffect } from "react";

import Headings from "../Headings/Headings";
import HoverImage from "../../AnimationComponents/HoverImage/HoverImage";
const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col h-screen w-full py-12 wrapper overflow-hidden"
    >
      <Headings heading="About" direction="right" textColor="black" />
      <HoverImage />
    </div>
  );
};

export default About;
