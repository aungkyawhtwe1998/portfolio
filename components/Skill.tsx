import React from "react";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the import path as needed

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ skill, directionLeft }: Props) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="group relative flex cursor-pointer">
      <img
        className={`rounded-full border-2 p-2 border-grey object-cover w-20 h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : directionLeft
            ? "-translate-x-10"
            : "translate-x-10 opacity-0"
        } transition-transform duration-500`}
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-500 ease-in-out group-hover:bg-primary h-20 w-20 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-light">{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
