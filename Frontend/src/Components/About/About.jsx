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
      <HoverImage hoverImageUrl="https://i.seadn.io/gae/eMQWSb9NyPpFZoTeE8nFqgdWPEAfrmAivEFgbiKAvkYhUNqRTwa5ofZspMG0qJVBajgIqiwTm9FnWQ0ZdVVaZ04j5Dp12NcSzSM7iw?auto=format&dpr=1&w=1000" />
    </div>
  );
};

export default About;
