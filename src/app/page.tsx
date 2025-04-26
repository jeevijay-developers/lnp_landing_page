"use client";
import HomeAbout1 from "@/components/about/HomeAbout1";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CourseCategory from "@/components/courses/CourseCategory";
import CourseSlider from "@/components/courses/CourseSlider";
import HomeHero from "@/components/home/HomeHero";
import HomeNavbar from "@/components/home/HomeNavbar";
import Rankers from "@/components/students/Rankers";
import Topper from "@/components/students/Topper";
import Teachers from "@/components/about/Teachers";
import TestimonialSlider from "@/components/about/TestimonialSlider";
import TopBlogs from "@/components/about/TopBlogs";
// import Footer from "@/components/about/Footer";
import { ToastContainer } from "react-toast";
import CourseContextProvide from "@/context/courseContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSection from "@/components/about/ImageSection ";
import DownloadApp from "@/components/about/DownloadApp";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <CourseContextProvide>
        <HomeNavbar />
        <CourseSlider />
        <HomeHero />
        <Topper />
        <ImageSection />
        <Rankers />
        <HomeAbout1 />
        <DownloadApp />
        <CourseCategory />
        <WhyChooseUs />
        <Teachers />
        <TestimonialSlider />
        <TopBlogs />
        {/* <Footer /> */}
        <ToastContainer />
      </CourseContextProvide>
    </div>
  );
}
