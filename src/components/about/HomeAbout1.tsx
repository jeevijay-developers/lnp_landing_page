import Image from "next/image";
import React from "react";
import { BiBulb } from "react-icons/bi";

const HomeAbout1 = () => {
  return (
    <div className="flex lg:flex-row justify-center pb-4 items-center gap-6 bg-blue-50 flex-col lg:mx-10 mx-2 dark:text-gray-800  text-gray-600">
      <div className="w-full lg:w-[50%] p-9 rounded-lg   " data-aos="fade-left">
        <img
          src={"/imgs/cs.jpg"}
          className="w-[90%] h-[90%] object-cover shadow-lg rounded-2xl"
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className="lg:w-[50%] lg:px-15 px-5" data-aos="fade-right">
        <div className="text-myGreen flex flex-row gap-4 py-5 text-center items-center justify-center text-lg">
          <BiBulb className="text-2xl" />{" "}
          <span>Gateway to Lifelong Learning</span>
        </div>
        <h3 className="text-4xl font-bold">
          Learn N Prep, A Revolution in Education
        </h3>
        <p className="font-bold mt-4 mb-9">
          Are you eager to embark on an enriching educational journey that
          empowers you to reach your fullest potential? Look no further! Learn N
          Prep, a leading Edtech company, is here to open the doors to a world
          of knowledge and opportunities. As a student, you&apos;ll discover a
          multitude of benefits that will propel your learning experience to new
          heights.
        </p>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex flex-row w-fit gap-4">
            <Image
              src={"/icons/persons.png"}
              alt="image"
              width={60}
              height={60}
            />
            <div>
              <h5 className="text-lg font-bold">Learn with Educators</h5>
              <p>Well educated & Experienced Faculty</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Image
              src={"/icons/mentors.png"}
              alt="image"
              width={60}
              height={60}
            />
            <div>
              <h5 className="text-lg font-bold">Expert Mentors</h5>
              <p>Best Instructor to Counsel & Guide You</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout1;
