import Image, { StaticImageData } from "next/image";
import styles from "./ImageTrack.module.css";

interface ImageObject {
  path: StaticImageData;
  width: number;
}

interface ImagesProps {
  images: ImageObject[];
  line: number
}

const Slide: React.FC<ImagesProps> = ({ images, line }) => {
  const stylePicker = (line: number) => {
    if (line === 1) {
      return styles.imageSlide1
    } else if (line === 2) {
      return styles.imageSlide2
    } else {
      return styles.imageSlide3
    }
  }
  return (
    <div className={stylePicker(line)}> 
      {images.map((image, index) => (
        <div key={`${index}-track2`}>
          <Image
            src={image.path}
            alt="Holiday Destination"
            width={image.width}
            height={200}
            className="rounded-2xl h-[200px] object-cover"
          />
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
