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
    image:
      "https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg",
    message:
      " Learn N Prep exceeded my expectations. The personalized attention and customized study plans were exactly what I needed. The teachers are very approachable and provide valuable feedback. I would definitely recommend this coaching institute to others",
    rating: 4,
    role: "",
  },
  {
    name: "Rohit Mehta",
    image:
      "https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg",
    message:
      "Learn N Prep is a fantastic place to prepare for exams. The detailed study guides and regular assessments kept me on track. The teachers are genuinely invested in student success, and the overall atmosphere is very motivating.",
    rating: 5,
    role: "",
  },
  {
    name: "Aditya Bhanushali",
    image:
      "https://cdn.pixabay.com/photo/2017/11/28/04/57/indian-boy-2982850_1280.jpg",
    message:
      "The faculty is outstanding, and the learning atmosphere is truly encouraging. The course materials are current and well-structured. Adding more online resources would make it even more convenient for students who prefer remote learning.",
    rating: 5,
    role: "",
  },
  {
    name: "Gargi Jain",
    image:
      "https://cdn.pixabay.com/photo/2021/02/03/09/44/portrait-5977311_960_720.jpg",
    message:
      "Learn N Prep truly surpassed my expectations! The individualized support and tailored study plans helped me stay focused and motivated. The faculty is friendly and always ready to guide with insightful feedback. I’d highly recommend this institute to anyone aiming for academic success.",
    rating: 4,
    role: "",
  },
  {
    name: "Rohit Raj Gupta",
    image:
      "https://cdn.pixabay.com/photo/2021/03/05/00/32/man-6069944_960_720.jpg",
    message:
      "Learn N Prep offers an excellent environment for exam preparation. Their structured study materials and frequent assessments helped me stay disciplined and focused. The faculty is truly dedicated to each student’s progress, and the motivating atmosphere made learning enjoyable.",
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
