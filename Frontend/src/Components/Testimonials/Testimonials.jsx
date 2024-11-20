import React from "react";
import "./Gallery.css";
import { FaRegStar } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-full lg:pb-20 text-center">
      <div className="flex w-full ">
        <h2 className="font-poppins uppercase text-3xl  mx-auto md:text-6xl lg:text-8xl  py-4 my-10 text-black">
          Words of Praise
        </h2>
      </div>
      <div className="gallery mx-auto max-w-[800px] h-[450px] flex justify-center gap-[1rem]">
        <div className="gallery-panel relative rounded-lg flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
            alt="Smiling Face"
            className="max-w-[100%] h-[100%] object-cover transition-transform duration-500 ease-linear
"
          />
          <div className="absolute top-[20px] left-[20px]">
            <p className="review-text opacity-0 font-montserrat font-semibold text-white  text-[20px]">
              Design & Development
            </p>
          </div>
          <div className="absolute gap-1 bottom-[20px] left-[20px] flex opacity-0 review-box">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <FaStarHalfAlt />
          </div>
        </div>

        <div className="gallery-panel relative rounded-lg flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
            alt="Smiling Face"
            className="max-w-[100%] h-[100%] object-cover transition-transform duration-500 ease-linear
"
          />
          <div className="absolute top-[20px] left-[20px]">
            <p className="font-montserrat font-semibold text-white review-text opacity-0 text-[20px]">
              User Interface
            </p>
          </div>
          <div className="absolute gap-1 bottom-[20px] left-[20px] flex opacity-0 review-box">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <FaRegStar />
          </div>
        </div>

        <div className="gallery-panel relative rounded-lg flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1550173250-6279c71c6e9b"
            alt="Smiling Face"
            className="max-w-[100%] h-[100%] object-cover transition-transform duration-500 ease-linear
"
          />
          <div className="absolute top-[20px] left-[20px]">
            <p className="font-montserrat font-semibold text-white review-text opacity-0 text-[20px]">
              Design & Research
            </p>
          </div>
          <div className="absolute gap-1 bottom-[20px] left-[20px] flex opacity-0 review-box">
            <FaStar />
            <FaStar />
            <FaStar /> <FaStarHalfAlt />
            <FaRegStar />
          </div>
        </div>

        <div className="gallery-panel relative rounded-lg flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1524492926121-4723520d78d9"
            alt="Smiling Face"
            className="max-w-[100%] h-[100%] object-cover transition-transform duration-500 ease-linear
"
          />
          <div className="absolute top-[20px] left-[20px]">
            <p className="font-montserrat font-semibold text-white review-text opacity-0 text-[20px]">
              Development
            </p>
          </div>
          <div className="absolute gap-1 bottom-[20px] left-[20px] flex opacity-0 review-box">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <FaStar />
          </div>
        </div>

        <div className="gallery-panel relative rounded-lg flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845"
            alt="Smiling Face"
            className="max-w-[100%] h-[100%] object-cover transition-transform duration-500 ease-linear
"
          />
          <div className="absolute top-[20px] left-[20px]">
            <p className="font-montserrat font-semibold text-white review-text opacity-0 text-[20px]">
              Code
            </p>
          </div>
          <div className="absolute gap-1 bottom-[20px] left-[20px] flex opacity-0 review-box">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt /> <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
