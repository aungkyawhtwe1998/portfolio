import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the path as needed
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  const isVisible = useIntersectionObserver({ threshold: 0.1 }); // You can adjust the threshold as needed

  return (
    <div
      className={`px-5 lg:px-10 py-10 4xl:py-20 mx-auto max-w-6xl transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <h3 className="uppercase tracking-[20px] text-center text-grey text-2xl">
        About
      </h3>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-center pt-10 xl:pt-20">
        <Image
          src={urlFor(pageInfo?.profileImage).url()}
          alt="about me"
          width={500}
          height={500}
          priority
          className="-mb-20 md:mb-0 flex-shrink-0 aspect-[500/500] max-w-[500px] object-cover rounded-lg"
        />
        <div className="mt-10 text-center md:text-start px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="">little</span>{" "}
            background
          </h4>
          <p className="text-sm mt-5 px-2">{pageInfo.backgroundInformation}</p>
        </div>
      </div>
    </div>
  );
}
