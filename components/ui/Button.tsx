"use client";

import { motion } from "framer-motion";

interface Props {
    colour: string,
    text: string,
    textColour: string,
}

const Button = ({colour, text, textColour}: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`w-[220px] rounded my-6 bg-[${colour}] p-3 flex items-center gap-4`}
    >
      <p className={`text-[${textColour}]`}>{text}</p>
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
  );
};

export default Button;