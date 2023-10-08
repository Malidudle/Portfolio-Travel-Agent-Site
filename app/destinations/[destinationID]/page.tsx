"use client";

import Image from "next/image";
import PocketBase from "pocketbase";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";

export const dynamic = "force-static";

const page = async ({
  params: { destinationID },
}: {
  params: { destinationID: string };
}) => {
  const clickHandler = () => {
    alert("Just a dummy button!");
    return;
  };

  const pb = new PocketBase("http://127.0.0.1:8090");

  try {
    const record = await pb.collection("destinations").getOne(destinationID, {
      expand: "Title,Description,Image",
    });

    const image = await pb.collection("images").getOne(record.Images[0]);

    const url = pb.files.getUrl(image, image.Photo);
    return (
      <main className="h-[100%] min-h-[100vh]">
        <Navbar />
        <div className="p-5 flex">
          <article className="flex flex-col lg:flex-row md:flex-row sm:flex-col lg:gap-[280px] md:gap-[160px] gap-5 ml-auto mr-auto lg:justify-center md:justify-center items-center pt-6">
            <Image
              src={url}
              alt={""}
              width={400}
              height={400}
              className="w-[300px] h-[300px] rounded-xl object-cover"
              priority={true}
            />
            <div className="flex flex-col justify-center items-center gap-3 w-fit">
              <h1 className="text-4xl">{record.Title}</h1>
              <p className="text-center">{record.Description}</p>
              <motion.button
                onClick={clickHandler}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded my-6 bg-[#333] p-3 flex items-center gap-4 px-7"
              >
                <p>Book Your Trip!</p>
              </motion.button>
            </div>
          </article>
        </div>
      </main>
    );
  } catch (error) {
    console.log(error);
  }
};

export default page;
