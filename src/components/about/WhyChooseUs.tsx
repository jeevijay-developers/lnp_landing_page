import React from "react";
import { BiBulb } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-6 bg-[#38ada4] lg:mx-10 mx-2">
      <div
        className="lg:w-[40%] w-[70%]"
        data-aos="fade-right"
        data-aos-delay={`50`}
      >
        <img src="/imgs/whychooseus.png" alt="w=" loading="lazy" />
      </div>
      <div
        className="lg:w-[60%] w-full text-white"
        data-aos="fade-left"
        data-aos-delay={`50`}
      >
        <div className="text-myGreen flex flex-row gap-4 py-5 text-center items-center justify-center text-lg">
          <BiBulb className="text-2xl text-white" />{" "}
          <span className="text-white">Why Choose us</span>
        </div>
        <div className="lg:w-[100%] flex flex-col gap-4 justify-center items-center lg:mx-0 pb-5 mx-6">
          <div className="text-4xl font-bold">
            Reasons To Choose Learn N Prep
          </div>
          <p
            className="text-lg lg:w-[80%] w-full"
            data-aos="fade-up"
            data-aos-delay={`100`}
          >
            <b className="font-bold">Designed Lectures: </b>Learning is a
            crucial aspect of our lives. To achieve our goals we must invest in
            learning, and for that, we have destined our lectures in a way that
            will ease the process of learning and will make it interactive. Live
            lectures will help students to grasp the essence of the topic and
            will develop their zeal to study.
          </p>
          <p
            className="text-lg lg:w-[80%] w-full"
            data-aos="fade-up"
            data-aos-delay={`150`}
          >
            <b className="font-bold">Experienced Teachers: </b>We have the best
            experienced educator, who knows what&apos;s best for their students
            and are capable of reducing knowledge to that simple compound of the
            obvious and wonderful. With their guidance and motivation, one can
            get through the obstacles and achieve the best in life.
          </p>
          <p
            className="text-lg lg:w-[80%] w-full"
            data-aos="fade-up"
            data-aos-delay={`200`}
          >
            <b className="font-bold">Academic Content: </b>Our content&apos;s
            aim purpose is to assist in high-quality instruction. It is designed
            on three parameters. It is Engaging, Effective, and Diverse. It also
            encourages critical thinking, which is essential for making informed
            decisions and solving complex problems.
          </p>
          <p
            className="text-lg lg:w-[80%] w-full"
            data-aos="fade-up"
            data-aos-delay={`250`}
          >
            <b className="font-bold">Personalized Attention: </b>With 1:1
            mentorship, you have the undivided attention of an experienced
            mentor who is focused on helping you achieve your goals. This allows
            for a tailored learning experience that is specific to your needs,
            strengths, and weaknesses. their zeal to study.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
