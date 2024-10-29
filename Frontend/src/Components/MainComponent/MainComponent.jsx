import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../SkillsSection/SkillsSection";

import HeroHeader from "../Header/HeroHeader";

import About from "../About/About";
import Projects from "../Projects/Projects";
import HeroImageScroll from "../HeroImageScroll/HeroImageScroll";
import Footer from "../Footer/Footer";
function MainComponent() {
  return (
    <>
      <NavBar />
      <SocialMediaIcons />

      <HeroImageScroll />
      {/* <HeroHeader /> */}
      {/* <HeroSection /> */}
      <About />
      <SkillsSection />

      <Projects />
      <Footer />
    </>
  );
}

export default MainComponent;
