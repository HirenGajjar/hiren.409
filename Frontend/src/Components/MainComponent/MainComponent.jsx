import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../SkillsSection/SkillsSection";

import HeroHeader from "../Header/HeroHeader";

import Projects from "../Projects/Projects";

import Headings from "../Headings/Headings";
// import Projects from "../Projects/Projects";

function MainComponent() {
  return (
    <>
      <NavBar />
      <SocialMediaIcons />
      {/* <HeroHeader /> */}
      <HeroSection />

      <SkillsSection />
      <Projects />
    </>
  );
}

export default MainComponent;
