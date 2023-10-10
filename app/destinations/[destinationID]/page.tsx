import Image from "next/image";
import PocketBase from "pocketbase";
import Navbar from "@/components/navbar/Navbar";
import DestinationButton from "./Button";

export const dynamic = "force-static";

const page = async ({
  params: { destinationID },
}: {
  params: { destinationID: string };
}) => {

  const pb = await new PocketBase(process.env.POCKETBASE_URL);

  try {
    const record = await pb.collection("destinations").getOne(destinationID, {
      expand: "Title,Description,Image",
    });

    const image = await pb.collection("images").getOne(record.Images[0]);

    const url =  pb.files.getUrl(image, image.Photo);
    return (
      <main className="h-[100%] min-h-[100vh]">
        <Navbar />
        <div className="p-5 flex">
          <article className="flex flex-col lg:flex-row md:flex-row sm:flex-col lg:gap-[280px] md:gap-[160px] gap-5 ml-auto mr-auto lg:justify-center md:justify-center items-center pt-6">
            <img
              src={url}
              alt={""}
              width={400}
              height={400}
              className="w-[300px] h-[300px] rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-3 w-fit">
              <h1 className="text-4xl">{record.Title}</h1>
              <p className="text-center">{record.Description}</p>
              <DestinationButton />
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
