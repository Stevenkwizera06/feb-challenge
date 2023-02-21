/* eslint-disable @next/next/no-img-element */
import React from "react";

function News() {
  return (
    <div className="bg-[#f2efed]">
      <section className="px-5 lg:px-0">
       
        <div className="max-w-5xl mx-auto lg:mr-auto lg:py-0 py-10 bg-[#FAF7F5]">
          <h1 className="text-4xl lg:px-0 px-32 text-[#3B218F]">News</h1>
        </div>
        <div className="max-w-5xl mx-auto lg:px-0 px-20 bg-[#FAF7F5] grid lg:pb-0 pb-20">
          <div className="flex lg:flex-col justify-between gap-10">
            <div className="">
              {[1, 2].map((value, idx) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="grid   grid-cols-7 gap-7 lg:mt-5 mt-10">
                    <div className="col-span-4">
                      <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png" className="aspect-video h-52" alt="" />
                    </div>
                    <div className="col-span-3">
                      <h1>08 Feb 2023</h1>
                      <h1 className="text-2xl mt-4 tracking-wide max-w-[16rem]">Earthquakes Turkey and
                        Syria</h1>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="space-y-20 flex-1 ">
              {[1, 2, 3].map((value, idx) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="flex gap-3 mt-10">
                    <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720" className="aspect-video w-32 h-24 object-cover  " alt="" />
                    <div className="">
                      <h1>08 Feb 2023</h1>
                      <h1 className="tracking-wide max-w-[10rem] text-lg mt-2">Earthquakes Turkey and
                        Syria</h1>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="max-w-5xl grid mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-2xl m-auto lg:px-0 lg:text-lg lg:font-semibold px-32 ">News overview</h1>
        </div>
      </section>
    </div>
  );
}

export default News;
