import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "/src/App.css"; // Import your custom CSS

const Cube = () => {
  const initialImages = [
    "src/assets/Images/image1.png",
    "src/assets/Images/image2.png",
    "src/assets/Images/image3.png",
    "src/assets/Images/image4.png",
    "src/assets/Images/image5.png",
    "src/assets/Images/image6.png",
    "src/assets/Images/image7.png",
    "src/assets/Images/image8.png",
    "src/assets/Images/image9.png",
    "src/assets/Images/image10.png",
    "src/assets/Images/image11.png",
    "src/assets/Images/image12.png",
  ];

  const [images, setImages] = useState(initialImages);
  const [shufflePaused, setShufflePaused] = useState(false);
  const [swapping, setSwapping] = useState([-1, -1]);

  useEffect(() => {
    const swapTwoImages = () => {
      if (!shufflePaused) {
        const firstIndex = Math.floor(Math.random() * images.length);
        let secondIndex = Math.floor(Math.random() * images.length);

        while (secondIndex === firstIndex) {
          secondIndex = Math.floor(Math.random() * images.length);
        }

        setSwapping([firstIndex, secondIndex]);

        const newImages = [...images];
        setTimeout(() => {
          const temp = newImages[firstIndex];
          newImages[firstIndex] = newImages[secondIndex];
          newImages[secondIndex] = temp;

          setImages(newImages);
          setSwapping([-1, -1]);
        }, 500); // Delay for the fade-out transition
      }
    };

    const intervalId = setInterval(swapTwoImages, 2000);

    return () => clearInterval(intervalId);
  }, [shufflePaused, images]);

  return (
    <div className="flex justify-center items-center w-4/6 h-36 mx-auto">
      <div className="flex justify-between items-center w-full h-full space-x-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-[74px] h-[74px] flex justify-center items-center rounded-full glowing-cubes"
            onMouseEnter={() => setShufflePaused(true)}
            onMouseLeave={() => setShufflePaused(false)}
          >
            {/* Black circle layer */}
            <div className="circle-layer w-32 h-32 flex justify-center items-center">
              {/* Image inside the black circle */}
              <a href={image} target="_blank" rel="noopener noreferrer">
                <motion.img
                  key={image}
                  src={image}
                  alt={`Box ${index + 1}`}
                  className="image-class w-14 h-14 object-cover rounded-lg" // Custom CSS class for image styling
                  initial={swapping.includes(index) ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }} // Smooth fade transition
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cube;
