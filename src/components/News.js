import React from 'react'

function News() {
  return (
    <div>
        <section className="px-5">
        {/* impact */}
        <div className="max-w-5xl mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-3xl px-32 text-[#3b2171]">News</h1>
        </div>
        <div className="max-w-5xl mx-auto px-20 bg-[#FAF7F5] grid pb-20">
          <div className="flex justify-between gap-10">
          <div className="">
            {[1, 2].map((value, idx) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="grid grid-cols-7 gap-7 mt-10 w-[30rem]">
                  <div className="col-span-4">
                  <img src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226" alt="" />
                  </div>
                  <div className="col-span-3">
                    <h1>08 Feb 2023</h1>
                    <h1 className="text-xl tracking-wide max-w-3xl">Earthquakes Turkey and
                      Syria</h1>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="space-y-20 flex-1">
          {[1, 2,3].map((value, idx) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="flex gap-3 mt-10">
                    <img className='w-28' src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png" alt="" />
                  <div className="">
                    <h1>08 Feb 2023</h1>
                    <h1 className="text-sm tracking-wide max-w-3xl">Earthquakes Turkey and
                      Syria</h1>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>
        <div className="max-w-5xl grid mx-auto py-10 bg-[#FAF7F5]">
          <h1 className="text-3xl px-32 text-[#3b2171]">News</h1>
        </div>
      </section>
    </div>
  )
}

export default News