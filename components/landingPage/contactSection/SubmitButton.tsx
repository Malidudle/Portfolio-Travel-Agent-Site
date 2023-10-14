"use client";

import { motion } from "framer-motion";

const SubmitButton = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("This is just a demo site. No message will actually be sent!");
  };
  return (
    <motion.button
      onClick={(e) => clickHandler(e)}
      type="submit"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded my-6 bg-[#FFF] p-3 flex items-center gap-4 text-black px-7"
    >
      <p>Send Message</p>
    </motion.button>
  );
};

export default SubmitButton;
