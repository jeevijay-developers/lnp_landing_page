"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import icon from "../../../public/icons/logo.png";
import MyButtonFour from "../buttons/MyButtonFour";
// import MobileNavbar from "./MobileNavbar";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoClose } from "react-icons/io5";
// import DeskTopNavbar from "./DesktopNavbar";
const HomeNavbar = () => {
  // const [hideSidebar, setHideSidebar] = useState(true);
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   // check the screen size initially
  //   const handleScreenResize = () => {
  //     if (window.innerWidth < 1024) {
  //       setMobile(true);
  //     } else {
  //       setMobile(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleScreenResize);
  //   handleScreenResize();
  //   return () => {
  //     window.removeEventListener("resize", handleScreenResize);
  //   };
  // }, [mobile]);

  return (
    <div className="flex relative flex-row  gap-5 justify-between items-center py-3 lg:mp-10 px-0 bg-transparent border-b-2 border-gray-200 lg:mx-10 mx-2">
      {/* {hideSidebar ? (
        <div
          className="absolute top-[10px]  right-5 hover:cursor-pointer  z-[100] lg:hidden flex"
          onClick={() => setHideSidebar(false)}
        >
          <RxHamburgerMenu className="text-5xl text-black-500 " />
        </div>
      ) : ( */}
      {/* <div
        className="absolute top-[10px] right-5  z-[100] hover:cursor-pointer  lg:hidden flex"
        onClick={() => setHideSidebar(true)}
      > */}
      {/* <IoClose className="text-5xl text-black-500 " /> */}
      {/* </div> */}
      {/* )} */}
      {/* <ul className=""> */}
      {/* <li> */}
      <Image
        src={icon}
        alt="icon"
        height={60}
        className="lg:w-auto w-[50%] h-auto max-w-[70%]"
      />
      <MyButtonFour />
      {/* </li> */}
      {/* </ul> */}
      {/* <DeskTopNavbar /> */}
      {/* {mobile ? <MobileNavbar hideSidebar={hideSidebar} /> : <DeskTopNavbar />} */}
    </div>
  );
};

export default HomeNavbar;
