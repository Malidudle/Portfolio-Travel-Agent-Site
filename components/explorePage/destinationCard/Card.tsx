import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  Name: string;
  Description: string;
  image_url: string;
}

const Card = ({ Name, Description, image_url }: Destination) => {
  return (
    <div className="w-[400px] h-[330px] flex flex-col items-center">
      <Image
        src={image_url}
        alt={""}
        width={400}
        height={256}
        className="rounded-xl max-w-[400px] max-h-[256px] object-cover"
      />
      <Button Name={Name} Description={Description} />
    </div>
  );
};

export default Card;
