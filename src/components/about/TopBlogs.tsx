"use client";
import React from "react";
import { motion } from "framer-motion";

type Blog = {
  title: string;
  image: string;
  summary: string;
  date: string;
  link: string;
};

const blogs: Blog[] = [
  {
    title: "",
    image: "/imgs/b1.png",
    summary: "JEE Advanced 2025: The Ultimate Guide to Crack the IIT Dream",
    date: "2025-02-25 17:13:44",
    link: "#",
  },
  {
    title: "",
    image: "/imgs/b2.png",
    summary: "JEE Main 2025 (Session 2): Your Last Chance to Shine!",
    date: "April 5, 2025",
    link: "#",
  },
  {
    title: "Top UI/UX Trends in 2025",
    image: "/imgs/b3.png",
    summary:
      "Outstanding Results by Learn N Prep Students in JEE Main 2025 (Session 1)",
    date: "2025-02-25 16:49:47",
    link: "#",
  },
];

const TopBlogs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
        Top Blogs
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-3">
                {blog.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
                {blog.summary}
              </p>
              <a
                href={blog.link}
                className="inline-block mt-4 text-indigo-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopBlogs;
