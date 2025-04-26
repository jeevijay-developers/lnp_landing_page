import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <section className="flex flex-col md:flex-row items-center lg:mx-10 my-3 mx-2 justify-between gap-6 p-6 md:p-12 bg-gradient-to-r from-[#2ebaa2] to-[#298b83] rounded-2xl shadow-2xl text-white">
      <div className="flex flex-col gap-4 max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Get Our Android App
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg text-gray-200"
        >
          Stay connected and enjoy all features from your mobile. Download now
          from the Google Play Store.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          href="https://play.google.com/store/apps/details?id=com.digilnp&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center w-fit gap-3 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <FaGooglePlay size={24} />
          Get it on Google Play
        </motion.a>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://play-lh.googleusercontent.com/y2qANZhAx8jf4bC2CGFBgT7MGZazggaxwnqy021SaoIK7Na0oQXyGhxxBz5NndN_SR4=w240-h480-rw" // You can replace this with your app's mockup image
        alt="App Preview"
        className="w-64 md:w-80 object-contain rounded-4xl shadow-lg"
      />
    </section>
  );
};

export default DownloadApp;
