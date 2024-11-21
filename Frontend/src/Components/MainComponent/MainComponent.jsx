import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import NavBar from "../NavBar/NavBar";

import SkillsSection from "../SkillsSection/SkillsSection";
import Testimonials from "../Testimonials/Testimonials";
import Projects from "../Projects/Projects";

import Footer from "../Footer/Footer";
import { SmoothScrollHero } from "../SmoothScrollHero/SmoothScrollHero";

function MainComponent() {
  return (
    <>
      <NavBar />
      <SocialMediaIcons />

      <SmoothScrollHero />

      <SkillsSection />

      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}

export default MainComponent;
