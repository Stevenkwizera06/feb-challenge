import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs"

function Become() {
  return (
    <>
    <div className="max-w-5xl mx-auto p-8 bg-gray-50">
        <p className='px-8 py-4 text-5xl leading-[60px] justify-between text-gray-800'>You don’t just become something, you become someone</p>
    </div>
    <section className="px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 items-center ">
          <div className="py-10 px-5 bg-[#0077b3] flex">
            <div className='flex justify-between border-b w-full'>
            <input type="text" placeholder='Search...'
             className='text-white text-2xl bg-transparent'
             />
            <BiSearch className='text-white h-6 w-6'/>
            </div>
          </div>
          <div className="bg-white py-11 max-w-2xl shadow-2xl">
            <div className='flex justify-between '>
                <p className='text-blue-900 text-lg px-8'>About VU Amsterdam</p>
                <BsArrowRight className='text-blue-900 w-24'/>
            </div>
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