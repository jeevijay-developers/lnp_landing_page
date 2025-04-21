"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const images: string[] = [
  "/imgs/r1.jpg",
  "/imgs/r2.jpg",
  "/imgs/r4.jpg",
  "/imgs/r3.jpg",
  "/imgs/r5.jpg",
];
const Rankers = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <div
      className="overflow-hidden relative lg:mx-10 mx-2  py-8 px-4 "
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Our Toppers
      </h2>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="embla__slide  p-3 shadow-lg  min-w-fit flex-shrink-0 rounded-2xl overflow-hidden "
              // initial={{ opacity: 0, scale: 0.95 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={`${50 + index * 100}`}
            >
              <img
                src={src}
                style={{
                  aspectRatio: "1/1",
                }}
                alt={`Slide ${index + 1}`}
                className="w-[350px] h-[350px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rankers;
