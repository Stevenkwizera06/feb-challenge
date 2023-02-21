import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="sm:px-4 ">
      <div className="text-white font-[300] py-[30px]  mx-auto bg-[#0077b3] max-w-5xl">
        <ul className="items-center gap-4 leading-[28px] flex flex-wrap px-8">
          {[
            { title: "Privacy Statement", link: "privacy" },
            { title: "Disclaimer", link: "disclaimer" },
            {
              title: "Safety at VU Amsterdam",
              link: "safety",
            },
            { title: "Colofon", link: "colofon" },
            { title: "Cookie Settings", link: "cookie" },
            { title: "Web archive", link: "web" },
          ].map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="flex items-center gap-2">
                <span>{item.title}</span>
                <BsArrowRight className="leading-[16px]" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="leading-[27px] mx-auto px-8">
          Copyright © 2023 - Vrije Universiteit Amsterdam
        </p>
      </div>
    </div>
  );
};

export default Footer;
