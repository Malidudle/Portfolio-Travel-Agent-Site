"use client";

import { motion } from "framer-motion";
import { MouseEvent } from "react";

const Contact = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("This is just a demo site. No message will actually be sent!");
  };
  return (
    <form className="w-[610px] h-[540px] rounded-2xl bg-[#333] p-8 flex flex-col gap-6">
      <h2 className="text-2xl">Send Us a Message!</h2>
      <div className="flex flex-col gap-1">
        <label>Name</label>
        <input type="text" className="h-10 w-[240px] rounded text-black p-1" />
      </div>
      <div className="flex flex-col gap-1">
        <label>Email</label>
        <input type="text" className="h-10 w-[500px] rounded text-black p-1" />
      </div>
      <div className="flex flex-col gap-1">
        <label>Message</label>
        <textarea className="h-[100px] w-[500px] rounded text-black p-1" />
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          onClick={(e) => clickHandler(e)}
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="rounded my-6 bg-[#FFF] p-3 flex items-center gap-4 text-black px-7"
        >
          <p>Send Message</p>
        </motion.button>
      </div>
    </form>
  );
};

export default Contact;
