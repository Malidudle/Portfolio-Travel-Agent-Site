import React from "react";

const page = ({
  params: { destination },
}: {
  params: { destination: string };
}) => {
  return <div>{destination}</div>;
};

export default page;
