import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-screen bg-[#f1f1f1] flex ">
        <div className="bg-white w-[90%]  mx-auto mt-[10%] rounded-tl-[50px] rounded-tr-[50px] ">
          <div className="title flex justify-center">
            <h3 className="font-medium  text-[3rem] md:text-[5rem] lg:text-[6vw] xl:text-[8vw]  pointer-events-none uppercase max-w-[8ch] tracking-tighter text-black">
              Say hello
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
