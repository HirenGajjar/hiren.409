import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

function Headings({ heading }) {
  const repeatedWord = `\u00A0\u00A0${heading}\u00A0\u00A0`.repeat(1000).trim();
  return (
    <>
      <Marquee speed="350" gradient="true">
        <h2 className="uppercase sm:text-4xl md:text-6xl lg:text-8xl  py-4">
          {repeatedWord}
        </h2>
      </Marquee>
    </>
  );
}

export default Headings;
