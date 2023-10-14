"use client";

import { motion } from "framer-motion";

interface Destination {
  Name: string;
  Description: string;
}

const Button = ({ Name, Description }: Destination) => {
  return (
    <motion.button
      className="bg-[#333] rounded-xl relative translate-y-[-60%] text-center w-fit p-3"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <h2 className="text-2xl font-bold">{Name}</h2>
      <p className="text-sm font-extralight opacity-60 p-1">{Description}</p>
    </motion.button>
  );
};

export default Button;
