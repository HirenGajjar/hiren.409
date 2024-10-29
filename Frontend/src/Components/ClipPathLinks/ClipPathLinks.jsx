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

import { GrMysql } from "react-icons/gr";

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiNodedotjs} />
        <LinkBox Icon={SiTypescript} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiGit} />
        <LinkBox Icon={SiDocker} />
        <LinkBox Icon={FaAws} />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiReact} />
        <LinkBox Icon={SiNextdotjs} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiTailwindcss} />
        <LinkBox Icon={SiBootstrap} />
        <LinkBox Icon={SiSass} />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={GrMysql} />
        <LinkBox Icon={SiPostgresql} />
        <LinkBox Icon={SiMongodb} />
        <LinkBox Icon={SiJsonwebtokens} />
      </div>
    </div>
  );
};

export default ClipPathLinks;
