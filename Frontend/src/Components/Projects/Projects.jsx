import React from "react";
import LargeHeadingWithImage from "../../AnimationComponents/LargeHeadingWithImages/LargeHeadingWithImage";
import Project from "./Project";

function Projects() {
  return (
    <>
      <div id="Work" className="">
        <LargeHeadingWithImage />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
}

export default Projects;
