"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  content: string;
  height: number;
  width: number;
  icon?: {
    path: string;
    height: number;
    width: number;
  };
  hoverScale?: number;
  clickScale?: number;
  colour?: string;
}

const Button = ({
  content,
  height,
  width,
  icon,
  hoverScale,
  clickScale,
  colour,
}: Props) => {
    const buttonClass = `bg-${colour || 'white'} p-[8px] text-black rounded-md w-[${String(width)}px] h-[${String(height)}px] flex gap-4`;
  return (
    <motion.button
      whileHover={{ scale: hoverScale || 1.05 }}
      whileTap={{ scale: clickScale || 0.95 }}
      className={buttonClass}
    >
      {content}
      {icon ? (
        <Image
          src={icon.path}
          width={icon.width}
          height={icon.height}
          alt="icon"
        />
      ) : (
        <></>
      )}
    </motion.button>
  );
};

export default Button;
