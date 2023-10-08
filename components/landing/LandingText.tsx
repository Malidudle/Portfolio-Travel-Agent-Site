"use client";

import React from "react";
import { motion } from "framer-motion";

const landingText = () => {
  return (
    <div className="flex flex-col justify-center lg:ml-[80px] lg:items-start lg:mr-0 lg:pt-0 items-center mr-auto ml-auto pt-6">
      <h1 className="text-5xl mb-4">Book Your Dream Trip</h1>
      <p className="w-[500px]">
        Welcome! Explore captivating destinations and
        create lasting memories with us.
      </p>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-[220px] rounded my-6 bg-[#333333] p-3 flex items-center gap-4 "
      >
        <p>Explore Destinations</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10.4688 4.375L16.0938 10L10.4688 15.625"
            stroke="white"
            strokeLinejoin="round"
          />
          <path d="M15.3125 10H3.90625" stroke="white" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </div>
  );
};

export default landingText;
