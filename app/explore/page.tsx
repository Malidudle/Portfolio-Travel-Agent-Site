import Card from "@/components/explorePage/destinationCard/Card";
import React from "react";

const page = async () => {
  return (
    <main>
      <Card
        Name={"Greece"}
        Description={"Come to athens my drilla gg"}
        image_url={
          "https://iakzvzsxlxddjplvwuff.supabase.co/storage/v1/object/public/images/BeachHouses.jpg"
        }
      />
    </main>
  );
};

export default page;
