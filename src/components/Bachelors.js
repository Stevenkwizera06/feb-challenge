/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
// import { BsArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs"

function Bachelors() {
  return (
    <>
      <section className="px-5 -mt-10">
        <div className="max-w-5xl mx-auto px-20 bg-white pb-52 pt-10 flex justify-between">
          {[1, 2, 3, 4].map((val, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="flex space-x-2">
                <FaGraduationCap className="w-8 h-8 text-[#0077b3]" />
                <p>31.704 students</p>
              </div>
            );
          })}
        </div>
        <div className="max-w-5xl mx-auto px-24 gap-10 bg-[#FAF7F5] py-20 grid grid-cols-2">
          {[1, 2].map((value, idx) => {
            return (
              <div className="bg-white p-10 -mt-44 custom-shadow">
                <div className="flex justify-between">
                  <h1 className="text-4xl text-[#0077b3]">Education</h1>
                  <BsArrowRight className="w-10 h-10 text-[#0077b3]" />
                </div>

                <div className="mt-6">
                  {[1, 2, 3, 4, 5, 6].map((v, i) => {
                    return (
                      <div className="flex justify-between space-y-3 font-[18px]">
                        <p>Bachelor's programmes</p>
                        <BsArrowRight />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-2">
        <div className="max-w-4xl mx-auto px-4  py-32 bg-white items-center">
          <div className="bg-[#0077b3] max-w-5xl mx-auto py-16  grid grid-cols-2">
            <div className="flex items-center">
              <p className="text-white font-bold text-xl px-6 ">Do you also want to change your world?</p>
            </div>
            <div className="bg-white p-6 w-[22rem] ">
              <p className="font-bold text-xl">visit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bachelors;
