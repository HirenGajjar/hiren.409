import React, { useEffect } from "react";
import hirenImage from "../../../Resources/hiren.jpg";

function HoverImage() {
  useEffect(() => {
    const cursorImage = document.getElementById("cursorImage");
    let timer;

    const handleMouseMove = (e) => {
      cursorImage.style.display = "block";
      cursorImage.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      clearTimeout(timer);
      timer = setTimeout(() => {
        cursorImage.style.display = "none";
      }, 800);
    };

    const handleMouseLeave = () => {
      cursorImage.style.display = "none";
      clearTimeout(timer);
    };

    const wrapper = document.querySelector(".wrapper");

    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <img
        id="cursorImage"
        src={hirenImage}
        alt="Hiren Image"
        className="absolute w-72 transition-transform duration-100 ease-in-out pointer-events-none z-[999]"
        style={{ display: "none", borderRadius: "20px" }}
      />
    </>
  );
}

export default HoverImage;
