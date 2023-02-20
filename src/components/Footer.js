
import React from 'react'

function Footer() {
  return (
    <div>
         <section className="px-5">
        <div className="max-w-5xl py-4 space-y-6 px-8 bg-[#0077b3] text-white mx-auto">
          <div className="flex gap-5 ">
            {["Privacy Statement", "Disclaimer", "Safety at VU Amsterdam", "Colofon", "Cookie Settings", "Web archive"].map((ok, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="mt-4 flex gap-1 items-center">
                  <h1 className="text-md font-medium tracking-wide whitespace-nowrap ">{ok}</h1>
                  <svg Name="fill-[#000000]" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              )
            })}
          </div>
          <div className="font-medium">
            <h1>Copyright &copy;
              2023 - Vrije Universiteit Amsterdam</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
