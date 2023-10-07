import React from "react";

const Info = () => {
  return (
    <div className="w-[360px] h-[540px] p-[32px] rounded-2xl bg-[#333] flex flex-col gap-[60px]">
        <div className="flex">
          <h2 className="text-2xl ml-auto mr-auto">Get In Touch With Us!</h2>
        </div>
        <h4><span className="font-bold">Email:</span> malin@malingrafton.com</h4>
        <h4><span className="font-bold">Tel:</span> 0800 1234</h4>
        <h4><span className="font-bold">Email:</span> +44 07548 807818</h4>
        <h4><span className="font-bold">Opening Hours:</span> 9am-6pm Mon-Fri</h4>
    </div>
  );
};

export default Info;
