import React from "react";
import { BiBulb } from "react-icons/bi";
import course_cate from "@/data/course_cate";
import Image from "next/image";

const CourseCategory = () => {
  return (
    <div
      style={{
        backgroundImage: `URL("/svg/Simple Shiny.svg")`,
      }}
      className="lg:mx-10 mx-2 dark:text-gray-700"
    >
      <div className="flex flex-col justify-center items-center flex-wrap gap-7 p-5">
        <div className="text-myGreen flex flex-row gap-4 py-5 text-center items-center justify-center text-lg">
          <BiBulb className="text-2xl" />{" "}
          <span>Gateway to Lifelong Learning</span>
        </div>
        <h1 className="text-3xl font-bold">Explore Our Category for Courses</h1>
        <p>You will all find something to spark your curiosity and enhance</p>
      </div>
      <div>
        <ul className="flex flex-row justify-center items-center flex-wrap gap-7 p-5">
          {course_cate.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-col items-center border border-myGreen m-4 p-4 rounded-xl bg-white min-w-[200px]"
              >
                <Image
                  src={"/icons/books.png"}
                  width={75}
                  height={75}
                  alt="image"
                />
                <h1 className="mt-3 font-bold">{item.title}</h1>
                <p>{item.count}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseCategory;
