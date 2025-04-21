import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            LEARN <span className="text-indigo-500">N</span> PREP
          </h2>
          <p className="text-sm text-gray-300">
            We are passionate about education and dedicated to providing
            high-quality resources for learners of all backgrounds.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">FAQ&apos;s</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" /> For Enquiry &nbsp; +91
              7877445142
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> support@learnnprep.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-green-400 mt-1" />
              Learn N Prep, 398, New Rajeev Gandhi Nagar <br /> Kota (Rajasthan)
              324005
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
