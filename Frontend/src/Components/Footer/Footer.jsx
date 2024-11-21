import React from "react";
import ContactForm from "../ContactForm/ContactForm";
function Footer() {
  return (
    <>
      <div id="Contact" className="w-full h-screen bg-[#f1f1f1] flex ">
        <div className="bg-white w-[90%]  mx-auto mt-[10%] rounded-tl-[50px] rounded-tr-[50px] lg:mt-[5%] ">
          <div className="title flex justify-center mb-[150px] sm:mb-0 md:mb-[150px] lg:mb-0">
            <h3 className="font-medium  text-[3rem] md:text-[5rem] lg:text-[6vw] xl:text-[8vw]  pointer-events-none uppercase max-w-[8ch] tracking-tighter text-black font-poppins">
              Say hello
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Footer;
