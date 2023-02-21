/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsArrowRight, BsPuzzle } from "react-icons/bs";
import { FaGlobeAfrica, FaMedal } from "react-icons/fa";

function Bachelors() {
  return (
    <>
    <div className="bg-[#f2efed]">
      <section className="px-5 -mt-10 sm:mt-4">
        <div className="max-w-5xl mx-auto px-20 sm:px-3 bg-white pb-52 pt-10  flex  justify-between">
          <div className="flex sm:flex-col space-x-2">
            <FaGraduationCap className="w-8 h-8 text-[#0077b3]" />
            <p>31.704 students</p>
          </div>
          <div className="flex sm:flex-col space-x-2">
            <FaGlobeAfrica className="w-8 h-8 text-[#0077b3]" />
            <p>5.190 international students</p>
          </div>
          <div className="flex sm:flex-col space-x-2">
            <FaMedal className="w-8 h-8 text-[#0077b3]" />
            <p>459 PHD defences</p>
          </div>
          <div className="flex sm:flex-col space-x-2">
            <BsPuzzle className="w-8 h-8 text-[#0077b3]" />
            <p>9 faculties</p>
          </div>
        </div>


        <div className="max-w-5xl mx-auto px-2 gap-10 bg-[#FAF7F5] py-20 grid grid-cols-2 sm:grid sm:grid-cols-1 sm:space-y-4">
          <div className="bg-white p-10 -mt-44 custom-shadow">
            <div className="flex justify-between">
              <h1 className="text-4xl text-[#0077b3]">Education</h1>
              <BsArrowRight className="w-10 h-10 text-[#0077b3]" />
            </div>

            <div className="mt-6">
              {[
                "Bachelor's programme",
                "Master's Programme",
                "Honourner's Programme",
                "Educational for Professionals",
                "Study guide",
              ].map((v, i) => {
                return (
                  <div className="flex justify-between space-y-3 font-[18px]">
                    <p>{v}</p>
                    <BsArrowRight />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white p-10 -mt-44 custom-shadow">
            <div className="flex justify-between">
              <h1 className="text-4xl text-[#0077b3]">Research</h1>
              <BsArrowRight className="w-10 h-10 text-[#0077b3]" />
            </div>

            <div className="mt-6">
              {[
                "Resaech highlights",
                "Master's Programme",
                "Valorisation",
                "Our scintists",
                "Prizes and distinctions",
                "Interdisciplinary research institutes",
              ].map((v, i) => {
                return (
                  <div className="flex justify-between space-y-3 font-[18px]">
                    <p>{v}</p>
                    <BsArrowRight />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-2">
        <div className="max-w-5xl mx-auto px-4  py-32 sm:py-10 bg-white items-center">
          <div className="bg-[#0077b3] max-w-5xl mx-auto py-16  grid grid-cols-2 sm:grid sm:grid-cols-1 space-y-3 ">
            <div className="flex items-center">
              <p className="text-white font-bold text-xl px-6 ">
                Do you also want to change your world?
              </p>
            </div>
            <div className="bg-white p-6 w-[22rem] sm:w-56 sm:ml-6">
              <p className="font-bold text-xl">visit the VU Master's Event</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Bachelors;
