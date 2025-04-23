import React from "react";

const ImageSection = () => {
  return (
    <section className="py-12 px-4 bg-blue-50 lg:mx-10 mx-2">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="lg:text-3xl mg:text-xl text-lg font-bold mb-8 text-myGreen">
          ✨🎉 Our 2025 Toppers ✨🎉
        </h2>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 ">
          <div className="rounded-2xl w-fit overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="/imgs/w1.jpeg"
              alt="Nature 1"
              className="w-[300px] h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl w-fit overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="/imgs/w2.jpeg"
              alt="City"
              className="w-[300px] h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl w-fit overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="/imgs/w3.jpeg"
              alt="Technology"
              className="w-[300px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
