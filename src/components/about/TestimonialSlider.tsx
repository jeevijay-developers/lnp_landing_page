"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  image: string;
  message: string;
  rating: number;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    image:
      "https://t3.ftcdn.net/jpg/10/66/68/96/360_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
    message:
      "Excellent faculty and a good learning environment. Up-to-date resources. More online resources for remote studying would be great.",
    rating: 5,
    role: "",
  },
  {
    name: "Sneha Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      " Learn N Prep exceeded my expectations. The personalized attention and customized study plans were exactly what I needed. The teachers are very approachable and provide valuable feedback. I would definitely recommend this coaching institute to others",
    rating: 4,
    role: "",
  },
  {
    name: "Rohit Mehta",
    image:
      "https://t3.ftcdn.net/jpg/10/66/68/96/360_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
    message:
      "Learn N Prep is a fantastic place to prepare for exams. The detailed study guides and regular assessments kept me on track. The teachers are genuinely invested in student success, and the overall atmosphere is very motivating.",
    rating: 5,
    role: "",
  },
  {
    name: "Aarav Sharma",
    image:
      "https://t3.ftcdn.net/jpg/10/66/68/96/360_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
    message:
      "Excellent faculty and a good learning environment. Up-to-date resources. More online resources for remote studying would be great.",
    rating: 5,
    role: "",
  },
  {
    name: "Sneha Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      " Learn N Prep exceeded my expectations. The personalized attention and customized study plans were exactly what I needed. The teachers are very approachable and provide valuable feedback. I would definitely recommend this coaching institute to others",
    rating: 4,
    role: "",
  },
  {
    name: "Rohit Mehta",
    image:
      "https://t3.ftcdn.net/jpg/10/66/68/96/360_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
    message:
      "Learn N Prep is a fantastic place to prepare for exams. The detailed study guides and regular assessments kept me on track. The teachers are genuinely invested in student success, and the overall atmosphere is very motivating.",
    rating: 5,
    role: "",
  },
];

const TestimonialSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className=" px-4 py-10 bg-white dark:bg-zinc-950 lg:mx-10 mx-2 overflow-scroll">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        What Our Students Say
      </h2>
      <p className="text-center">
        You will all find something to spark your curiosity and enhance
      </p>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="embla__slide min-w-[80%] md:min-w-[50%] lg:min-w-[33%] bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-indigo-500">{testimonial.role}</p>
              <div className="flex justify-center items-center gap-1 my-2 text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 italic mt-2">
                &quot;{testimonial.message}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
