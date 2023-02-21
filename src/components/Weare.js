/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../data/contentCard";

const Weare = () => {
  return (
    <>
    <section className="block lg:hidden max-w-5xl mx-auto ">
        <div className="max-w-5xl  overflow-hidden bg-white pb-12 grid">
          <div className="max-w-5xl mr-auto lg:mr-auto lg:py-0">
            <h1 className={`text-4xl lg:px-0 px-36 text-[#CC4100] pb-10 pt-20`}>We are VU Amsterdam</h1>
          </div>
          <div className="flex lg:hidden -ml-56">
            {[1, 2, 3,4,5,6].map((val, idx) => {
              return (
                // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
                <div className="max-w-[23%] px-8 duration-300  cursor-pointer hover:shadow-xl basis-[23%] flex-grow-0 flex-shrink-0 ">
                  <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1" alt="" />
                  <div className="grid space-y-4 mt-8">
                    <h1 className="text-2xl text-[#CC4100] ">Vrije Schrijver (Writer in
                      Residence)</h1>
                    <p className="text-[1.20rem]">Read more</p>
                    <div className="ml-auto  py-5 ">
                      <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                        <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="ml-auto py-2 px-1 mt-10 cursor-pointer  flex gap-4 bg-[#FCD3B6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
        </div>
      </section>
      <section className="px-5 lg:hidden">
        <div className="max-w-5xl mx-auto lg:mr-auto lg:py-0 bg-[#FAF7F5]">
          <h1 className={`text-4xl lg:px-0 px-32 text-[#008053]  pb-10 pt-20`}>
            Take a look
          </h1>
        </div>
        <div className="max-w-5xl mx-auto lg:px-0 px-32 lg:gap-0 gap-10 bg-[#FAF7F5] lg:py-0 pb-20 grid grid-cols-2 lg:flex">
          <div className="bg-white lg:max-w-2xl pt-8 px-7 space-y-28 lg:pb-28 grid shade max-w-xs">
            <h1 className="text-[1.5rem] text-[#008053] ">VIJ Campus Tour</h1>
            <div className="ml-auto py-8">
              <svg
                className="fill-[#0077B3]"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
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
          </div>
        </div>
      </section>
      <div className="flex  items-center justify-center max-w-5xl mx-auto py-12">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
          <div className="flex flex-col gap-8 ">
            <h1 className="text-[38px] font-[300] leading-[56px] text-[#0077b3] mb-[15px]">
              VU main menu
            </h1>
            <Card
              data={[
                { title: "Home", link: "home" },
                { title: "Education", link: "education" },
                { title: "Research", link: "research" },
                { title: "About VU Amsterdam", link: "about" },
                {
                  title: "University Library",
                  link: "university",
                },
                { title: "VU Press Office", link: "vu" },
                { title: "Alumni", link: "alumni" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-[38px] font-[300] leading-[56px] text-[#cc4100] mb-[15px]">
              Most searched
            </h1>
            <Card
              data={[
                { title: "Contact us", link: "contact" },
                { title: "People finder", link: "people" },
                {
                  title: "Bachelors degree programmes",
                  link: "bachelors",
                },
                {
                  title: "Masters degree programmes",
                  link: "masters",
                },
                { title: "Faculties", link: "faculties" },
                { title: "Professionals", link: "professionals" },
                {
                  title: "Working at VU Amsterdam",
                  link: "working",
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-[38px] font-[300] leading-[56px] text-[#008053] mb-[15px]">
              Featured
            </h1>
            <Card
              icon={true}
              data={[
                { title: "Campus tour", link: "campus" },
                { title: "Study guide", link: "study" },
                { title: "VU Magazine", link: "vu" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weare;
