import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the import path as needed

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-5 xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-grey text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-grey text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 top-60 absolute gap-4">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
          />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            directionLeft
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
