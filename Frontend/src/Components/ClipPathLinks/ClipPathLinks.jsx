// ClipPathLinks.jsx
import React from "react";
import LinkBox from "../../AnimationComponents/LinkBox/LinkBox";
import {
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { GrMysql } from "react-icons/gr"; // MySQL uses Gr icon set

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiNodedotjs} href="#" />
        <LinkBox Icon={SiTypescript} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiGit} href="#" />
        <LinkBox Icon={SiDocker} href="#" />
        <LinkBox Icon={FaAws} href="#" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiReact} href="#" />
        <LinkBox Icon={SiNextdotjs} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiTailwindcss} href="#" />
        <LinkBox Icon={SiBootstrap} href="#" />
        <LinkBox Icon={SiSass} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={GrMysql} href="#" />
        <LinkBox Icon={SiPostgresql} href="#" />
        <LinkBox Icon={SiMongodb} href="#" />
        <LinkBox Icon={SiJsonwebtokens} href="#" />

        {/* Reused AWS for database support */}
      </div>
    </div>
  );
};

export default ClipPathLinks;
