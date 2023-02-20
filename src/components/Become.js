import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs"

function Become() {
  return (
    <>
       <section className="px-5 lg:px-0 mt-20 lg:max-w-[98rem]">
        <div className="max-w-5xl shade  bg-[#FDFDFD] mx-auto grid pb-[6rem] pt-7">
          <p className="m-auto px-3 lg:text-[1.6rem] text-[2.8rem] lg:max-w-full  max-w-[52rem] font-light text-[#333333]">You don’t just become something, you become someone</p>
        </div>
      </section>
      <section className="px-5 lg:px-0  -mt-10 relative z-10">
        <div className="max-w-[61rem] mx-auto lg:grid-cols-1 grid grid-cols-5 items-center ">
          <div className="py-7 relative px-10 col-span-3 flex justify-between bg-[#0077B3]">
            <input type="text" placeholder="Search..." className="w-full bg-[#0077B3] placeholder-white font-light text-white text-[1.35rem] caret-violet-50 border-b border-white focus:outline-none" />
            <svg className=" text-white absolute right-10 top-8"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="bg-white shade col-span-2 py-7 px-5 lg:px-0 items-center flex justify-between">
            <div>
              <p className="text-[1.35rem]  text-[#0077B3]">About VIJ Amsterdam</p>
            </div>
            <svg className="fill-[#0077B3]" xmlns="http://www.w3.org/2000/svg" width="26px" height="28px" viewBox="0 0 24 24" fill="#0077B3">
              <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="#0077B3" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>
       {/* background image */}
       <section className="-mt-10">
        <div className="max-w-[2080px]  mx-auto py-60" style={{
          backgroundImage: `url("https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883a3f00-09ba-48b4-ba79-5de8eee6b868/CH_C119530b_BA_home_hero_2200x720.jpg?w=2200&h=720&fit=clip&rect=0,1,2200,720")`,
          backgroundColor: '#cccccc', 
          backgroundSize: 'cover' ,
          backgroundPosition: 'center', 
        }}>

        </div>
      </section>
    </>
  )
}

export default Become