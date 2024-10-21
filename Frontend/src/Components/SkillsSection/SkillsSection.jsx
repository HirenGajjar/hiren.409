// SkillSection.jsx
import React from "react";
import ClipPathLinks from "../ClipPathLinks/ClipPathLinks";
import Headings from "../Headings/Headings";

const SkillSection = () => {
  return (
    <>
      <div className="bg-neutral-50 px-4 py-12 ">
        <Headings heading="Skills" direction="left" />
        <div className="mx-auto max-w-7xl my-12">
          <ClipPathLinks />
        </div>
      </div>
    </>
  );
};

export default SkillSection;
