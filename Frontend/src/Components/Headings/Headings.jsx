import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

function Headings({ heading }) {
  const [speed, setSpeed] = useState(350);
  const repeatedWord = `\u00A0\u00A0${heading}\u00A0\u00A0`.repeat(1000).trim();
  const updateSpeed = () => {
    if (window.innerWidth < 640) {
      setSpeed(150);
    } else {
      setSpeed(350);
    }
  };
  useEffect(() => {
    updateSpeed();

    window.addEventListener("resize", updateSpeed);

    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
  }, []);
  return (
    <>
      <Marquee speed={speed}>
        <h2 className="uppercase text-3xl md:text-6xl lg:text-8xl  py-4">
          {repeatedWord}
        </h2>
      </Marquee>
    </>
  );
}

export default Headings;
