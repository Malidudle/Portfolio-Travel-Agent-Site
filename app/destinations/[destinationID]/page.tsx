import Navbar from "@/components/navbar/Navbar";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

const page = async ({
  params: { destinationID },
}: {
  params: {
    destinationID: number;
  };
}) => {
  try {
    const destination = await prisma.destinations.findUnique({
      where: {
        id: destinationID,
      },
    });

    return (
      <>
        <main className="min-h-[100%] flex items-center p-2 pt-[15%]">
          <div className="ml-auto mr-auto flex flex-col items-center gap-5 lg:flex-row md:flex-col sm:flex-col">
            {destination?.image_url ? (
              <Image
                src={destination?.image_url!}
                alt={destination?.Description!}
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL="https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?cs=srgb&dl=pexels-splitshire-1526.jpg&fm=jpg"
                loading="eager"
                className="rounded-2xl"
              />
            ) : (
              <p>image not found</p>
            )}
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-4xl">{destination?.Name}</h1>
              <p className="text-sm">{destination?.Description}</p>
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error(error);

    return (
      <main className="min-h-[100vh] flex items-center">
        <p>{"Destination not found :("}</p>
      </main>
    );
  }
};

export default page;
