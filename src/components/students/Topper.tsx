import React from "react";
import { BiBulb } from "react-icons/bi";
import MyButtonTwo from "../buttons/MyButtonTwo";

const Topper = () => {
  return (
    <div className="lg:mx-10 mx-0 my-15 flex flex-col lg:flex-row justify-center items-center gap-6 pb-4 rounded-xl bg-blue-50">
      <div
        className="backdrop-blur-sm px-3 pt-4 rounded-lg  lg:w-[50%] justify-center flex lg:flex-row flex-col gap-4 text-center color-white w-full items-center lg:block"
        style={{ backgroundImage: `URL(${"/imgs/brush1.png"})` }}
      >
        <div className="text-myGreen flex flex-row gap-4 py-5 text-center items-center justify-center text-lg">
          <BiBulb className="text-2xl" />{" "}
          <span>Learn N Prep, A Revolution in Education</span>
        </div>
        <h2 className="text-4xl  mb-4">
          {" "}
          <b className="font-extrabold text-myGreen stroke-red font-mono ">
            {" "}
            Unlock Your Potential <br /> with
          </b>{" "}
          <span className="text-yellow-400 backdrop-blur-3xl ">
            Online Learning
          </span>
        </h2>
        <div className="flex flex-row gap-4 py-5 text-center items-center justify-center text-lg bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow pb-4 px-3">
          <p>
            Discover a world of knowledge and opportunities with <br /> our
            online education platform pursue a new career.
          </p>
        </div>
        <div className="w-full flex justify-center hover:cursor-pointer mt-6">
          <a href="#courses">
            <MyButtonTwo text="View Our All Courses" />
          </a>
        </div>
      </div>
      <div className="lg:w-[50%] w-full flex justify-center items-center mt-5">
        <img
          loading="lazy"
          src="/imgs/topper.png"
          className="lg:w-[50%] lg:h-auto w-full h-full"
          alt="image"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Topper;
