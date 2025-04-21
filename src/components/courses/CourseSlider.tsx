"use client";
import courses from "@/data/courses";
import useEmblaCarousel from "embla-carousel-react";
import React, { useContext } from "react";
import { motion } from "framer-motion";
// import MyButtonTwo from "../buttons/MyButtonTwo";
import MyButtonOne from "../buttons/MyButtonOne";
import { CourseContext } from "@/context/courseContext";

const CourseSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const context = useContext(CourseContext);

  return (
    <div
      id="courses"
      className="overflow-hidden  px-4 py-8 bg-gray-50 dark:bg-zinc-950 lg:mx-10 mx-2 "
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Explore Our Courses
      </h2>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              id={`${course.title} ${course.class}`}
              className="embla__slide min-w-[300px] flex-shrink-0 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl h-[300px] w-full object-cover mb-4"
              />
              <div className="w-fit">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2 text-animated-underline">
                  {course.title}{" "}
                  <span className="text-myGreen"> : Class {course.class} </span>
                </h3>
              </div>
              <p>
                <b className="text-lg font-bold">Class: </b> {course.class}{" "}
              </p>
              {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                {course.description}
              </p> */}
              <div dangerouslySetInnerHTML={{ __html: course.description }} />
              <div className="flex mx-auto justify-around gap-5 items-center">
                <p className="text-lg font-bold text-indigo-700">
                  ₹{course.price}
                </p>
                <div
                  onClick={() => {
                    context.setCourseData(`${course.title} ${course.class}`);
                    location.hash = `#form`;
                  }}
                >
                  <MyButtonOne text="Enroll Now" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
