import Image from "next/image";
import React from "react";
// import MyButtonTwo from "../buttons/MyButtonTwo";
// import MyButtonThree from "../buttons/MyButtonThree";
// import { CgNotes } from "react-icons/cg";
import "../../../public/styles/floatAnimation.css";
import study from "../../../public/svg/study.svg";
import ModernForm from "../forms/Form";
// import { GiPodiumWinner } from "react-icons/gi";

const HomeHero = () => {
  return (
    <main
      style={{
        backgroundImage: `URL(/svg/bg-2.svg)`,
      }}
      className="pt-4  lg:mx-10 mx-3 "
    >
      {/* <div>
        <Image
          src="/assets/banner.jpg"
          alt="image"
          className="h-[450px] object-cover mx-auto "
          height={100}
          width={1400}
        />
      </div> */}
      <div className="max-full relative  h-[600px] my-15 min-h-fit flex flex-col justify-start lg:justify-center items-center lg:flex-row  mx-auto">
        <div className="relative lg:flex hidden h-[auto] lg:min-h-[auto] min-h-[500px] lg:w-[50%] w-full">
          <Image
            src={study}
            alt="image"
            className="h-[auto] w-[100%] object-cover mx-auto "
            height={200}
            width={100}
          />
          {/* <div className="h-full w-full absolute top-0 lg:top-8 left-0 overflow-hidden ">
            <div className="card1 flex flex-row gap-3 justify-start items-center  top-[10%] left-[17%] bg-transparent backdrop-blur-2xl text-black rounded w-fit pe-4 shadow-2xl myfloat_first  ">
              <div className="p-3 bg-red-600 rounded-lg">
                <CgNotes className="text-3xl bg-red-600  text-white" />
              </div>
              <div>
                <p className="font-bold text-xl">25+ Years</p>
                <p>Experience in Coaching</p>
              </div>
            </div>
            <div
              className="card1 flex flex-row gap-3 justify-center items-center backdrop-blur-2xl
              absolute top-[20%] right-[-50%] bg-transparent text-black rounded w-fit pe-4 shadow-2xl  myfloat_second pr-3
              "
            >
              <div className="p-4 bg-red-600 rounded-xl">
                <CgNotes className="text-3xl bg-red-600  text-white" />
              </div>
              <div>
                <p className="font-bold text-xl">8+ Years</p>
                <p>Trust of online Presence</p>
              </div>
            </div>
            <div className="card1 flex flex-row gap-3 justify-start items-center relative top-[200px] left-[50px]  text-black rounded w-fit pe-4 shadow-2xl z-30 myfloat_first backdrop-blur-2xl bg-transparent">
              <div className="p-3 bg-red-600 rounded-lg">
                <CgNotes className="text-3xl bg-red-600  text-white" />
              </div>
              <div>
                <p className="font-bold text-xl">11+ Lakh</p>
                <p>Students assisted</p>
              </div>
            </div>
          </div> */}
          {/* <div
            className="absolute bottom-[200px] backdrop-blur-sm px-3 pt-4 rounded-lg border-2 border-myGreen text-center color-white w-full hidden lg:block"
            style={{ backgroundImage: `URL(${"/imgs/brush1.png"})` }}
          >
            <h2 className="text-4xl text-animated-underline mb-4">
              {" "}
              <b className="font-extrabold text-myGreen stroke-red font-mono ">
                {" "}
                Unlock Your Potential <br /> with
              </b>{" "}
              <span className="text-yellow-400 backdrop-blur-3xl ">
                Online Learning
              </span>
            </h2>
            <div className="flex flex-row gap-4 py-5 text-center items-center justify-center text-lg bg-white">
              <p>
                Discover a world of knowledge and opportunities with <br /> our
                online education platform pursue a new career.
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col lg:w-[50%] mb-5 w-full h-full   justify-center items-center">
          <ModernForm />
        </div>
      </div>
      {/* <div className="w-[100%] relative flex justify-center">
        <div className="bg-red-600 w-[70%] py-10 mx-auto rounded-l"></div>
        <div className="bg-blue-900 w-[75%] py-4 mx-auto rounded-xl flex justify-evenly items-center text-white absolute top-[-11px] z-20">
          <p>Download the Biomentors App based on your Device</p>
          <MyButtonThree text={"Tablet/Desktop App"} />
        </div>
      </div> */}
    </main>
  );
};

export default HomeHero;
