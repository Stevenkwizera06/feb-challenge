/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs"

function Calender() {
  return (
    <div>
      <section className="px-5">
        <div className="max-w-7xl px-32 bg-white mx-auto">
          <div className="grid grid-cols-2 sm:grid sm:grid-cols-1 items-center py-16">
            <div>
              <h1 className="text-[#0077b3] text-3xl">Calender</h1>
            </div>
            <div className="flex gap-6">
              <div className="flex justify-between py-2 px-3 border border-white shadow-md w-64 bg-white">
                All categories
                <BiChevronDown className="w-8 h-8" />
              </div>
              <div className="flex justify-between py-2 px-3 border border-white shadow-md w-64">
                Date
                <BiChevronDown className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* next this in this section */}
          <div className="grid grid-cols-4 sm:grid sm:grid-cols-4 sm:space-x-24 items-center gap-6 py-16">
            {[1, 2, 3, 4].map((val, index) => {
              return (
                <div className="text-xl">
                  <h1>PHD Devices</h1>
                  <div className="mt-4">
                    {[1, 2].map((e, idx) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="space-y-6">
                          <h1 className="text-[#0077b3] text-xl font-bold">21 February 2023</h1>
                          <p>PHD defence by T.J.H. Jonkers</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 justify-center items-center ">
            <p className="text-2xl font-bold">View Calender</p>
            <BsArrowRight className="flex items-center w-6 h-6"/>
          </div>
        </div>
      </section>
      <section className="px-2">
        <div className="max-w-4xl mx-auto px-4  py-32 bg-white items-center">
          <div className="bg-[#0077b3] max-w-5xl mx-auto py-16  grid grid-cols-2">
            <div className="flex items-center">
              <p className="text-white font-bold text-xl px-6 ">Working at VU Amsterdam?</p>
            </div>
            <div className="bg-white p-6 w-[22rem] ">
              <p className="font-bold text-xl">visit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calender;
