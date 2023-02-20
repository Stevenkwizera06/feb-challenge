/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

// eslint-disable-next-line react/jsx-key

const dammy = [
  {
    item: "VU main menu",
    desc: [
      "Home",
      "Education",
      "Research",
      "About VU Amsterdam",
      " University Library",
      "VU Press Office",
      "Alumni",
    ],
    icons: [],
  },
  {
    item: "Most searched",
    desc: [
      "Home",
      "Education",
      "Research",
      "About VU Amsterdam",
      " University Library",
      "VU Press Office",
      "Alumni",
    ],
    icons: [],
  },
  {
    item: "Featured",
    desc: ["Compass Tour", "Study Guide"],
    icons: [AiFillInstagram, AiFillLinkedin, FaFacebookF, BsTwitter, BsYoutube],
  },
];

function Weare() {
  return (
    <div className="overflow-x-hidden">
      <section className="px-5 -mt-10 ">
        <h1 className="text-[#cc4100] text-2xl">We are VU Amsterdam</h1>
        <div className="max-w-5xl mx-auto px-20 bg-white space-x-14 pb-52 pt-10 flex justify-between">
          {[1, 2, 3].map((val, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="flex flex-col space-y-2 gap-5 ">
                <img
                  className="max-w-sm max-h-[30rem]"
                  src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&q=40&dpr=2"
                  alt=""
                />
                <p className="text-[#cc4100] text-md">
                  NWO Spinoza Prize winner Yvette van Kooyk
                </p>
                <p className="flex justify-between">
                  Read more
                  <BsArrowRight />
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto bg-[#f2efed]">
        <h1 className="text-3xl p-4">Take a Look</h1>
        <div className="flex justify-between px-8 py-10 bg-white m-5 w-80 h-60 ">
          <p>VU Campus Tour</p>
          <BsArrowRight />
        </div>
      </section>

      <section className="px-5">
        <div className="max-w-[78rem] px-32 bg-white py-16 mx-auto">
          {/* next this in this section */}
          <div className="grid grid-cols-3 sm:grid sm:grid-cols-1 gap-6 ">
            {dammy.map((val, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="">
                  <div>
                    <h1
                      className={`text-[2.30rem] ${
                        index === 1
                          ? "text-[#CC4100]"
                          : index === 0
                          ? "text-[#0077B3]"
                          : "text-[#008053]"
                      }`}
                    >
                      {val.item}
                    </h1>
                  </div>
                  <div className=" h-[80%] flex flex-col justify-between relative">
                    <div className="shade flex justify-beteen h-full flex-col px-7 py-5">
                      {val.desc.map((v, i) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <div className="flex justify-between">
                            <div className="mt-[0.35rem] text-lg  font-semibold">
                              {v}
                            </div>
                            <svg
                              Name="fill-[#000000]"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22px"
                              height="22px"
                              viewBox="0 0 24 24"
                              fill="#000000"
                            >
                              <path
                                d="M20 12L4 12M20 12L14 18M20 12L14 6"
                                stroke="#000000"
                                stroke-width="1.1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex gap-1 px-7  items-center absolute bottom-3">
                      {val.icons.map((e, idx) => {
                        return (
                          // eslint-disable-next-line react/jsx-no-comment-textnodes
                          <div className="h-12" key={idx}>
                            {<e />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Weare;
