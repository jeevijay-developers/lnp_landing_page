import React from "react";
import { BiBulb } from "react-icons/bi";
const Teachers = () => {
  return (
    <div className="lg:mx-10 mx-2 py-5 bg-blue-50 p-5 dark:text-gray-700">
      <div>
        <div className="text-myGreen my-3 flex flex-row gap-4 py-5 text-center items-center justify-center text-lg">
          <BiBulb className="text-2xl" /> <span>Instructor</span>
        </div>
        <h1 className="text-4xl font-bold my-3 text-center">
          Our Professional Educator
        </h1>
        <p className="my-3 text-center">
          You will all find something to spark your curiosity and enhance
        </p>
      </div>
      <div>
        <ul className="flex  flex-row lg:justify-start justify-center lg:items-center flex-wrap lg:gap-7 gap-3">
          <li
            className="flex flex-col  justify-center items-center max-w-[230px] bg-white p-2 rounded-xl border border-myGreen"
            data-aos="fade-up"
            data-aos-delay={`50`}
          >
            <img src="/imgs/t1.png" className="h-[200px] w-[200px]" alt="" />
            <b>Dharmendra Ojha Sir (+8 Year Experience)</b>
            <p>Chemistry</p>
          </li>
          <li
            className="flex flex-col justify-center items-center max-w-[230px] bg-white p-2 rounded-xl border border-myGreen"
            data-aos="fade-up"
            data-aos-delay={`100`}
          >
            <img src="/imgs/t2.png" className="h-[200px] w-[200px]" alt="" />
            <b>DHimanshu Soni Sir (+10 Year Experience)</b>
            <p>Physics</p>
          </li>
          <li
            className="flex flex-col justify-center items-center max-w-[230px] bg-white p-2 rounded-xl border border-myGreen"
            data-aos="fade-up"
            data-aos-delay={`150`}
          >
            <img src="/imgs/t3.png" className="h-[200px] w-[200px]" alt="" />
            <b>Ragini Tripathi Ma'am</b>
            <p>Zoology</p>
          </li>
          <li
            className="flex flex-col justify-center items-center max-w-[230px]  bg-white p-2 rounded-xl border border-myGreen"
            data-aos="fade-up"
            data-aos-delay={`200`}
          >
            <img src="/imgs/t4.png" className="h-[200px] w-[200px]" alt="" />
            <b>Amit Dehra Sir</b>
            <p>mathematics</p>
          </li>
          <li
            className="flex flex-col justify-center items-center max-w-[230px] bg-white p-2 rounded-xl border border-myGreen"
            data-aos="fade-up"
            data-aos-delay={`250`}
          >
            <img src="/imgs/t2.png" className="h-[200px] w-[200px]" alt="" />
            <b>Himanshu Soni Sir (+10 Year Experience)</b>
            <p>Physics</p>
          </li>
          <li
            className="flex flex-col justify-center items-center max-w-[230px] bg-white p-2 rounded-xl border border-myGreen"
            data-aos="fade-up"
            data-aos-delay={`300`}
          >
            <img src="/imgs/t6.png" className="h-[200px] w-[200px]" alt="" />
            <b>Ajay Singh Bhadoriya Sir</b>
            <p>Mathematics</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
``;
export default Teachers;
