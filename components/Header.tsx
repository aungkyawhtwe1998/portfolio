import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "../typings";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the import path as needed

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const { ref: headerRef, isVisible: isHeaderVisible } =
    useIntersectionObserver({ threshold: 0.1 });

  return (
    <header
      ref={headerRef}
      className="sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto xl:items-center z-10">
      <div
        className={`flex flex-row items-center transition-opacity duration-150 ${
          isHeaderVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}>
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </div>

      <Link
        href="#contact"
        legacyBehavior>
        <div
          className={`flex flex-row items-center text-gray-300 cursor-pointer transition-opacity duration-150 ${
            isHeaderVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
