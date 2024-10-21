import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

function Headings({ heading, direction, textColor }) {
  const [speed, setSpeed] = useState(350);
  const repeatedWord = `\u00A0\u00A0${heading}\u00A0\u00A0`
    .repeat(100000)
    .trim();
  const updateSpeed = () => {
    if (window.innerWidth < 640) {
      setSpeed(50);
    } else if (window.innerWidth < 800) {
      setSpeed(150);
    } else {
      setSpeed(250);
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
      <Marquee
        speed={speed}
        direction={`${direction}`}
        className="overflow-hidden "
      >
        <h2
          style={{ color: `${textColor}` }}
          className="font-poppins uppercase text-3xl md:text-6xl lg:text-8xl  py-4"
        >
          {repeatedWord}
        </h2>
      </Marquee>
    </>
  );
}

export default Headings;
