"use client";

import { motion } from "framer-motion";

const DestinationButton = () => {
  const clickHandler = () => {
    alert("Just a dummy button!");
    return;
  };
  return (
    <motion.button
      onClick={clickHandler}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded my-6 bg-[#333] p-3 flex items-center gap-4 px-7"
    >
      <p>Book Your Trip!</p>
    </motion.button>
  );
};

export default DestinationButton;
