"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const bgPhoto = "/assets/back.svg";
  return (
    <div
      className="bg-red-500 bg_page p-5 md:h-[80vh] grid md:grid-cols-2  place-items-center "
      style={{ "--image-url": `url(${bgPhoto})` }}
    >
      <motion.div
        className="max-w-xl"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-3xl text-white">Best Burgers in town!</p>
        <h1 className="text-5xl text-white font-bold">
          Burger Perfection in every bite
        </h1>
        {/* call to action button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-red-500 px-10 py-3 rounded-full font-bold mt-10 shadow-md hover:shadow-xl active:scale-90 transition duration-100"
        >
          Order Now
        </motion.button>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/hero-burger.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }} // optional
          alt="main image"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
