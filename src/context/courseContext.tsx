"use client";
import React, { ReactNode, createContext, useState } from "react";

interface CourseContextType {
  title: string;
  setCourseData: React.Dispatch<React.SetStateAction<string>>;
}

export const CourseContext = createContext<CourseContextType>({
  title: "",
  setCourseData: () => {},
});

const CourseContextProvide = ({ children }: { children: ReactNode }) => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  return (
    <CourseContext.Provider
      value={{ title: selectedCourse, setCourseData: setSelectedCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvide;
