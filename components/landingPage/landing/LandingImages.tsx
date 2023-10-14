import Image from "next/image";
import BeachHouses from "@/public/landing/beachHouses.jpg";
import FoggyMountain from "@/public/landing/foggyMountain.jpg";
import Portugal from "@/public/landing/portugal.jpg";

const LandingImages = () => {
  return (
    <div className="lg:flex gap-6 mr-[70px] ml-auto hidden">
      <div>
        <Image
          src={"https://iakzvzsxlxddjplvwuff.supabase.co/storage/v1/object/public/images/BeachHouses.jpg"}
          alt={"Beach Houses In the sun in portugal"}
          className="h-[504px] w-[300px] object-cover rounded-xl"
          priority={true}
          height={504}
          width={300}
        />
      </div>
      <div>
        <Image
          src={FoggyMountain}
          alt={"Old Man of Storr aka Kaer Morhen"}
          className="h-[240px] w-[300px] object-cover rounded-xl mb-6"
          priority={true}
        />
        <Image
          src={Portugal}
          alt={"A Portugese Town"}
          className="h-[240px] w-[300px] object-cover rounded-xl"
          priority={true}
        />
      </div>
    </div>
  );
};

export default LandingImages;
