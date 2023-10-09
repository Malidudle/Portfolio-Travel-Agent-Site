'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Blurhash } from 'react-blurhash';

interface ImageWithLazyLoadProps {
  src: string;
  alt: string;
  blurhash: string;
}

const ImageWithLazyLoad: React.FC<ImageWithLazyLoadProps> = ({ src, alt, blurhash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (image && image.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Blurhash hash={blurhash} width={300} height={200} />
      <img
        ref={imageRef}
        src={imageLoaded ? src : ''}
        alt={alt}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithLazyLoad;
