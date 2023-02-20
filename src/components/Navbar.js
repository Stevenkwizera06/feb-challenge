// import Wrapper from '@/Wrapper'
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-[#f2efed]">
      <div className="max-w-5xl py-4 mx-auto  bg-[#ffffff] flex justify-between items-center">
        <div className="w-44 h-11 p-2 px-4 ">
          <img src="https://vu.nl/assets/images/VU-logo-nobg.svg" alt="" />
        </div>
        <div className="flex">
          <div className="flex justify-end items-end space-x-4 max-w-[234px] p-4">
            <h5 className="font-semibold">NL</h5>
            <BsFillPersonFill />
            <BiSearch />
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
