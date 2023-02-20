import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Weare() {
  return (
    <div>
      <section className="px-5 -mt-10">
        <div className="max-w-5xl mx-auto px-20 bg-white space-x-14 pb-52 pt-10 flex justify-between">
          {[1, 2, 3].map((val, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="flex flex-col space-y-2 gap-5 ">
                <img className="max-w-sm max-h-[30rem]"
                  src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&q=40&dpr=2"
                  alt=""
                />
                <p className="text-[#cc4100] text-md">NWO Spinoza Prize winner Yvette van Kooyk</p>
                <p className="flex justify-between">
                  Read more
                  <BsArrowRight />
                </p>
              </div>
            );
          })}
        </div>
      </section>
      
    </div>
  );
}

export default Weare;
