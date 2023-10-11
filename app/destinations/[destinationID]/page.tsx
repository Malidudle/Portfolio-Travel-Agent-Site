import { prisma } from "@/lib/prisma";
import React from "react";

const page = async ({
  params: { destinationID },
}: {
  params: {
    destinationID: number;
  };
}) => {
  try {
    console.log(destinationID);
    const destination = await prisma.destinations.findUnique({
      where: {
        id: destinationID,
      },
    });

    return <div>{destination?.Name}</div>;
  } catch (error) {
    console.error(error);

    return (
      <main>
        <p>{"Destination not found :("}</p>
      </main>
    );
  }
};

export default page;
