import Link from "next/link";
import CtaButton from "./CtaButton";

const landingText = () => {
  return (
    <header className="flex flex-col justify-center lg:ml-[80px] lg:items-start lg:mr-0 lg:pt-0 items-center mr-auto ml-auto pt-6">
      <h1 className="text-[40px] text-center mb-4">Book Your Dream Trip</h1>
      <p className="lg:w-[400px] w-[80%] text-center lg:text-left">
        Welcome! Explore captivating destinations and
        create lasting memories with us.
      </p>
      <Link href={'/explore'} about="Brings you to the list of destinations">
      <CtaButton />
      </Link>
    </header>
  );
};

export default landingText;
