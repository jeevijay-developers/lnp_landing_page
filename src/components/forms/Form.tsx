"use client";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MyButtonThree from "../buttons/MyButtonThree";
import { toast } from "react-toast";
import { submitCourseRequest } from "@/server/api";
import { CourseContext } from "@/context/courseContext";

const availableCourses = [
  { name: "Navigator 9th", price: 7499 },
  { name: "Navigator 10th", price: 7499 },
  { name: "Nirmaan Batch IIT-JEE 11th", price: 8999 },
  { name: "Nirmaan Batch NEET 11th", price: 8999 },
  { name: "Nischay  Batch NEET 12th", price: 8999 },
  { name: "Nischay Batch IIT- JEE 12th", price: 8999 },
];

const validCoupons: Record<string, number> = {
  LNP10: 0.2,
};

const ModernForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState(availableCourses[0]);
  const [query, setQuery] = useState("");
  const [coupon, setCoupon] = useState("LNP10");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [loading, setLaoding] = useState(false);
  const context = useContext(CourseContext);

  useEffect(() => {
    if (context.title) {
      const title = context.title;
      const selectedCourse = availableCourses.filter((c) => c.name === title);
      setCourse(selectedCourse[0]);
    }
  }, [context]);

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (validCoupons[code]) {
      setDiscount(500);
      setAppliedCoupon(code);
    } else {
      setDiscount(0);
      setAppliedCoupon("");
      alert("Invalid coupon code!");
    }
  };

  const handleCheckout = () => {
    setLaoding(true);
    if (!(name && mobile)) {
      toast.error("Please fill all the details");
    }
    const checkout = {
      name,
      mobile,
      course: course.name,
      query,
      appliedCoupon,
      totalAmount,
      coupon,
    };
    // console.log(checkout);
    submitCourseRequest(checkout)
      .then(() => {
        toast.success("Your Request has been submitted successfully");
      })
      .catch((err) => {
        console.log(err);

        toast.error("Your Request has not been submitted successfully");
      })
      .finally(() => {
        setLaoding(false);
      });
  };

  const totalAmount = course.price - discount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
        Course Enrollment Form
      </h2>

      <div className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-3 rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
            Select Course
          </label>
          <select
            className="w-full p-3 rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={course.name}
            onChange={(e) => {
              const selected = availableCourses.find(
                (c) => c.name === e.target.value
              );
              if (selected) setCourse(selected);
            }}
          >
            {availableCourses.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name} - ₹{c.price}
              </option>
            ))}
          </select>
        </div>

        <textarea
          placeholder="Your Query"
          className="w-full p-3 rounded-xl border h-24 resize-none dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 p-3 rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            onClick={handleApplyCoupon}
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all duration-300"
          >
            Apply
          </button>
        </div>

        {appliedCoupon && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 dark:text-green-400 text-sm font-medium"
          >
            Coupon <strong>{appliedCoupon}</strong> applied! 🎉
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-indigo-100 dark:bg-indigo-900/40 w-full rounded-xl w-fit flex items-center justify-between text-lg font-semibold"
        >
          <div>
            <span>Total Amount </span> <span>₹{totalAmount}</span>
          </div>
          {loading ? (
            <div onClick={handleCheckout}>
              <MyButtonThree text={" Submitting"} />
            </div>
          ) : (
            <div onClick={handleCheckout}>
              <MyButtonThree text={" Proceed to Enquiry"} />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModernForm;
