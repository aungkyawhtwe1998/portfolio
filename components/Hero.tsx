import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi",
      `I am ${pageInfo?.name}`,
      `A passionate ${pageInfo?.role}`,
      "<Coding Is My Bias/>",
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="h-screen 4xl:h-[70vh] max-w-5xl mx-auto flex flex-col space-y-8 items-center text-center overflow-hidden">
      {/* <BackgroundCircle /> */}
      {/* <img
        className="relative aspect-auto w-full h-full max-h-[300px] max-w-[300px] mx-auto object-contain bg-center"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="me"
      /> */}
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        priority
        width={300}
        height={300}
        className="relative aspect-auto w-full h-full max-w-[250px] max-h-[250px] xl:max-h-[300px] xl:max-w-[300px] mx-auto object-contain bg-center"
        alt="me"
      />

      <div className="z-20 ">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor={"#81503a"} />
        </h1>
        <div className="mt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
