/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import Modal from "./Modal";
export default function Navbar() {
  const [show, setShow] = useState(false);

  const handClick = () => {
    setShow(true);
  };
  return (
    <section className="px-5 ">
      <div className="max-w-5xl max-auto fixed z-20 left-0 right-0 top-0 shade bg-white mx-auto  flex justify-between items-stretch">
        <div className="py-[1.2rem] px-10">
          <img
            className="w-44"
            src="https://vu.nl/assets/images/VU-logo-nobg.svg"
            alt=""
          />
        </div>
        <div
          onClick={handClick}
          className="flex py-5 px-6  gap-6 items-center cursor-pointer bg-[#F2EFED] "
        >
          {[
    "NL",
    // eslint-disable-next-line react/jsx-key
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>,
  ].map((value, index) => {
            return (
              <div
                onClick={handClick}
                className={`${index === 0 ? "text-xl font-medium" : ""}`}
                key={index}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
      {show && <Modal setShow={setShow} />}
    </section>
  );
}