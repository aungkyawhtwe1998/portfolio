import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the path as needed

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  const isVisible = useIntersectionObserver({ threshold: 0.1 }); // You can adjust the threshold as needed

  return (
    <div
      className={`h-screen px-10 md:pt-10 mx-auto max-w-5xl flex relative flex-col justify-evenly items-center transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-grey text-2xl">
        About
      </h3>
      <div className="absolute top-28 flex flex-col md:flex-row items-center justify-center pt-10 xl:pt-20">
        <img
          src={urlFor(pageInfo?.profileImage).url()}
          className="-mb-20 md:mb-0 flex-shrink-0 w-95 h-56 object-cover rounded-lg md:w-60 md:h-95 xl:w-[600px] xl:h-[400px]"
          alt="Profile"
        />
        <div className="mt-10 text-center md:text-start px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-primary/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm mt-5 px-2">{pageInfo.backgroundInformation}</p>
        </div>
      </div>
    </div>
  );
}
