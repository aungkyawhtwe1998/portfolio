import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the path as needed

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const isVisible = useIntersectionObserver({ threshold: 0.1 }); // You can adjust the threshold as needed

  return (
    <article
      id="observe" // Added ID for intersection observer
      className={`w-full md:w-1/2 lg:w-1/3 flex flex-col rounded-l items-center space-y-5 flex-shrink-0 snap-center bg-greyBackground p-10 transition-opacity duration-200 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-70"
      } cursor-pointer`}>
      <img
        className="aspect-[200/100] w-full h-full max-w-[250px] xl:max-w-auto bg-center object-contain rounded-xl"
        src={urlFor(experience?.companyImage).url()}
        alt="Company Image"
      />
      <div>
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((tech) => (
            <img
              src={urlFor(tech.image).url()}
              key={tech._id}
              className="w-8 h-8"
            />
          ))}
        </div>
        <p className="uppercase pb-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-5 pl-5 text-lg pr-5 h-60 lg:h-40 overflow-y-scroll">
          {experience?.points?.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
