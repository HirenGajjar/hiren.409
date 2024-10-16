import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function SocialMediaIcons() {
  return (
    <>
      <div className="fixed bottom-[7%] left-[5%]">
        <div className="flex flex-col gap-4 ">
          <FaXTwitter className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaGithub className="text-2xl" />
        </div>
      </div>
    </>
  );
}

export default SocialMediaIcons;
