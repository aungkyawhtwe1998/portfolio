import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <article
      id="observe"
      className={`flex rounded-lg flex-col justify-between items-center space-y-5 flex-shrink-0 bg-accent p-5 xl:p-8 transition-opacity duration-200 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-70"
      } cursor-pointer`}>
      <Image
        width={200}
        height={2200}
        priority
        className="aspect-[200/100] w-full h-full max-w-[250px] max-h-[100px] xl:max-w-auto bg-center object-contain rounded-xl"
        src={urlFor(experience?.companyImage).url()}
        alt="Company Image"
      />
      <div className="space-y-2 flex-grow flex flex-col">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl">{experience?.company}</p>
        <div className="flex space-x-2">
          {experience?.technologies.map((tech) => (
            <img
              src={urlFor(tech.image).url()}
              key={tech._id}
              className="w-8 h-8"
            />
          ))}
        </div>
        <p className="uppercase pb-2 text-grey">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-5 pl-5 text-lg pr-5 overflow-y-auto">
          {experience?.points?.map((p, index) => (
            <li
              key={index}
              className="line-clamp-2 hover:line-clamp-none transition-all ease-in-out duration-300">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
