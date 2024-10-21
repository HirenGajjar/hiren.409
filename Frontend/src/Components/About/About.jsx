import React from "react";
import Headings from "../Headings/Headings";

function About() {
  return (
    <>
      <div className="w-full h-screen bg-black text-white flex flex-col py-12">
        <Headings heading="About" direction="right" />
        <p className="max-w-[80%] mx-auto text-2xl my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          repudiandae qui cupiditate illum maxime minus blanditiis id beatae
          ullam magni reprehenderit consequuntur, eaque quo repellat officia
          aliquid veniam, vitae assumenda.
        </p>
      </div>
    </>
  );
}

export default About;
