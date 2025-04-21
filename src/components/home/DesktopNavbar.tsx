"use client";
import React, { useState } from "react";
// import MyButtonOne from "../buttons/MyButtonOne";
import navbar from "@/data/navbar";
import { FaChevronDown } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// import { RxHamburgerMenu } from "react-icons/rx";

// type Props = {};

const DeskTopNavbar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center">
      <ul className="flex flex-row justify-between relative items-center gap-4">
        {navbar.map((item) => {
          return item.link === null ? (
            <ul
              key={item.index}
              className="flex flex-row justify-between relative items-center gap-4"
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
                className={`absolute w-[200px] top-[25px] left-[-100px] z-[99] p-5  dark:bg-gray-800 dark:text-white bg-white text-black rounded-xl   ${
                  showMore
                    ? "h-fit overflow-auto"
                    : "hidden h-0 overflow-hidden"
                } transision-all ease-in-out left-0`}
                style={{
                  border: "2px solid #00000036",
                }}
              >
                {item.subItems &&
                  item.subItems.map((subitem) => {
                    return (
                      <li
                        className="hover:font-semibold dark:bg-gray-800 dark:text-white"
                        key={subitem.index}
                        style={{
                          borderBottom: "1px solid #3f3f3f29",
                        }}
                      >
                        <a href={subitem.link}>{subitem.title}</a>
                      </li>
                    );
                  })}
              </ul>
            </ul>
          ) : (
            <li key={item.index}>
              <a href={item.link || "#"}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      {/* <ul>
        <li>
          <MyButtonOne />
        </li>
      </ul> */}
    </div>
  );
};

export default DeskTopNavbar;
