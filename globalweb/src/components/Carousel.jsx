import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index, and loop back to the first image if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clear the interval when the component is unmounted or when images change
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="carousel">
      <img width={"100%"} src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Carousel;
