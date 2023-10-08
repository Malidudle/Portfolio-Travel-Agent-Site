import Image, { StaticImageData } from "next/image";
import styles from "./ImageTrack.module.css";
import Link from "next/link";

interface ImageObject {
  path: StaticImageData;
  width: number;
  label: string;
  destinationID: string;
}

interface ImagesProps {
  images: ImageObject[];
  line: number;
}

const Slide: React.FC<ImagesProps> = ({ images, line }) => {
  const stylePicker = (line: number) => {
    if (line === 1) {
      return styles.imageSlide1;
    } else if (line === 2) {
      return styles.imageSlide2;
    } else {
      return styles.imageSlide3;
    }
  };
  return (
    <div className={stylePicker(line)}>
      {images.map((image, index) => (
        <div key={`${index}-track2`} className="inline-block relative">
          <Link href={`/destinations/${image.destinationID}`} draggable='false'>
          <Image
            src={image.path}
            alt="Holiday Destination"
            width={image.width}
            height={200}
            className="rounded-2xl h-[200px] object-cover select-none"
            draggable={false}
            priority={true}
          />
          </Link>
          <label className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded-xl">
            {image.label}
          </label>
        </div>
      ))}
    </div>
  );
};

const ImageTrack: React.FC<ImagesProps> = ({ images, line }) => {
  return (
    <div className={styles.images}>
      <Slide images={images} line={line} />
      <Slide images={images} line={line} />
    </div>
  );
};

export default ImageTrack;
