import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import HeroHeader from "../Header/HeroHeader";
function MainComponent() {
  return (
    <>
      <NavBar />
      <SocialMediaIcons />
      <HeroHeader />
      <HeroSection />
      <SkillsSection />
    </>
  );
}

export default MainComponent;
