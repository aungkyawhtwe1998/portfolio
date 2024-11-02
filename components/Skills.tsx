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
      className={` px-5 lg:px-10 py-10 4xl:py-20 mx-auto max-w-6xl transition-opacity duration-150`}>
      <h3 className="uppercase text-center tracking-[20px] text-grey text-2xl">
        Skills
      </h3>
      <h3 className="mt-5 uppercase text-center tracking-[3px] text-grey text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="ps-5 md:ps-10 mt-10 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-8 gap-4">
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
