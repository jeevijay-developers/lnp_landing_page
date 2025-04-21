import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";

const HeaderTop = () => {
  return (
    <header className="flex flex-col lg:flex-row lg:justify-between justify-center items-center py-3 bg-myGreen text-white px-10">
      <div>
        <ul className="flex flex-row gap-5 ">
          <li className="flex flex-row gap-2 items-center">
            <FaPhone className="" />
            <span>7877445142</span>
          </li>
          {/* <li className="flex flex-row gap-2 items-center">
            <FaPhone className="text-iconRed" />
            <span>3434454556</span>
          </li> */}
          <li className="flex flex-row gap-2 items-center">
            <MdOutlineMailLock className="font-bold text-xl" />
            <span>support@learnnprep.com</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row gap-5 ">
          <li className="flex flex-row gap-2 items-center">
            <a href="https://www.facebook.com/Learnnprep" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <a
              href="https://www.linkedin.com/company/90829747/admin/feed/posts/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <a
              href="https://www.youtube.com/channel/UCqtBionokCd69gq1i7dgYWw"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=7877445142&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <a href="https://t.me/learnnprep" target="_blank">
              <FaTelegram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderTop;
