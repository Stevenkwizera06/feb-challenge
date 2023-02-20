import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronLeft,BsChevronRight } from "react-icons/bs"

function Impact() {
  return (
    <div>
      <section className="px-5">
        <div className="max-w-5xl mx-auto py-8 bg-[#f2efed]">
          <h1 className="text-3xl px-8 text-red-500">Impact</h1>
        </div>
      </section>
      <section className="">
        <div
          className="max-w-5xl  mx-auto py-72"
          style={{
            backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1")`,
            backgroundColor: "#cccccc",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </section>

      <section className="px-5">
        <div className="max-w-xl shadow-lg -mt-28 mx-auto px-20 bg-[#f2efed] py-10 flex justify-between">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-[#cc4100]">Science to impact</h2>
            <p className="text-lg">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <div className="flex justify-">
              <p className="text-lg font-medium">Read me</p>
              <AiOutlineArrowRight />
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div class="h-6 w-6 rounded-full bg-red-500"></div>
                <div class="h-3 w-3 rounded-full bg-red-500"></div>
                <div class="h-3 w-3 rounded-full bg-red-500"></div>
                <div class="h-3 w-3 rounded-full bg-red-500"></div>
              </div>

              <div className="flex bg-yellow-700 py-4 px-4 items-end">
                <BsChevronLeft />
                <BsChevronRight />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5">
        <div className="max-w-5xl mx-auto px-24 gap-10 bg-white py-20 grid grid-row-2">
          {[1, 2].map((value, idx) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="bg-white p-10 shadow-md">
                <h1 className="text-2xl">Ukraine</h1>
                <div className="mt-6">
                  <p>Information and support</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default Impact;
