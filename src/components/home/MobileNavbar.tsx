"use client";
import React, { useState } from "react";
// import MyButtonOne from "../buttons/MyButtonOne";
import navbar from "@/data/navbar";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import icon from "../../../public/icons/logo.png";
import MyButtonFour from "../buttons/MyButtonFour";

// import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  hideSidebar: boolean;
};

const MobileNavbar: React.FC<Props> = ({ hideSidebar }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={`flex z-60 flex-col h-screen justify-start text-2xl items-center bg-white  absolute top-0 left-0 p-10
    ${
      hideSidebar
        ? "w-0 overflow-hidden hidden"
        : "w-full block overflow-visible"
    } transition-all duration-300 ease-in-out
    `}
    >
      <ul className="mb-10 flex flex-row justify-between items-center">
        <li>
          <Image
            src={icon}
            alt="icon"
            className="lg:w-auto lg:h-auto w-[50%] h-auto "
          />
        </li>
        <li>
          <MyButtonFour />
        </li>
      </ul>
      <ul className="flex flex-col  w-full justify-start relative items-start gap-4">
        {navbar.map((item) => {
          return item.link === null ? (
            <ul
              key={item.index}
              className="flex flex-col justify-start relative items-center gap-4"
            >
              <li
                key={item.index}
                className="mr-2 w-full text-left flex flex-row gap-2 items-center"
                onClick={() => setShowMore(!showMore)}
              >
                {item.title} <FaChevronDown />
              </li>
              <ul
                key={item.index + 1}
                className={` w-[200px] top-[25px] dark:bg-white dark:text-blue-900 p-2  ${
                  showMore
                    ? "h-fit overflow-auto"
                    : "hidden h-0 overflow-hidden"
                } transision-all duration-300 ease-in-out left-0`}
              >
                {item.subItems &&
                  item.subItems.map((subitem) => {
                    return (
                      <li
                        className="hover:font-semibold dark:bg-white dark:text-black text-black"
                        key={subitem.index}
                        style={{
                          borderBottom: "1px solid #3f3f3f29",
                        }}
                      >
                        <a
                          className="dark:bg-white dark:text-black"
                          href={subitem.link}
                        >
                          {subitem.title}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </ul>
          ) : (
            <li
              key={item.index}
              className="hover:text-gray-500"
              style={{
                borderBottom: "1px solid #3f3f3f29",
              }}
            >
              <a href={item.link || "#"}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      {/* <ul className="mt-3 w-full">
        <li>
          <MyButtonOne />
        </li>
      </ul> */}
    </div>
  );
};

export default MobileNavbar;
