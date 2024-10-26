import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the import path as needed

type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-grey text-2xl">
        Experience
      </h3>
      <div className="mt-32 w-full flex overflow-x-scroll space-x-5 p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        {experience?.map((exp) => (
          <ExperienceCard
            key={exp._id}
            experience={exp}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
