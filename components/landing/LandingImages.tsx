import Image from "next/image";
import BeachHouses from "@/public/landing/BeachHouses.jpg";
import FoggyMountain from "@/public/landing/FoggyMountain.jpg";
import Portugal from "@/public/landing/portugal.jpg";

const LandingImages = () => {
  return (
    <div className="lg:flex gap-6 mr-[70px] ml-auto hidden">
      <div>
        <Image
          src={BeachHouses}
          alt={"Beach Houses In the sun in portugal"}
          className="h-[504px] w-[300px] object-cover rounded-xl"
        />
      </div>
      <div>
        <Image
          src={FoggyMountain}
          alt={"Old Man of Storr aka Kaer Morhen"}
          className="h-[240px] w-[300px] object-cover rounded-xl mb-6"
        />
        <Image
          src={Portugal}
          alt={"A Portugese Town"}
          className="h-[240px] w-[300px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default LandingImages;
