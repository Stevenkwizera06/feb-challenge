import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go"

export default function Calendar() {
  const headerData = [
    {
      text: "All categories",
    },
    {
      text: "Date",
    },
  ];
  const events = [
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
  ];
  return (
    <div className="bg-white  max-w-5xl mx-auto ">
      <div className="flex justify-between px-5 sm:px-[30px]  py-[45px] gap-6 2xl:mx-[130px]">
        <h2 className="text-[#0077b3] text-[38px] leading-[56px] font-light flex-1">
          Calendar
        </h2>
        {headerData.map((val, i) => {
          return (
            <div
              key={i}
              className="flex-1 bg-white shadow-small flex justify-between py-2.5 px-5 items-center"
            >
              <span className="text-lg font-medium text-dark">{val.text}</span>
              <GoChevronDown width={20} height={20} />
            </div>
          );
        })}
      </div>
      <div className="px-5 sm:px-[30px] 2xl:mx-[130px]">
        <div className="flex overflow-auto scrollbar-hide md:scrollbar-default">
          {events.map((val, i) => {
            return (
              <div key={i} className={"min-w-[220px] mr-[75px]"}>
                <Link
                  href={"/"}
                  className="underline font-light text-lg text-dark"
                >
                  {val.title}
                </Link>
                <h3 className="text-[#0077b3] text-lg font-bold">{val.date}</h3>
                <p className="text-dark text-2xl font-light">{val.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="flex text-lg font-medium text-dark items-center gap-2 mt-28"
        >
          View calendar <BsArrowRight className={"w-4"} alt="" />
        </Link>
      </div>
    </div>
  );
}
