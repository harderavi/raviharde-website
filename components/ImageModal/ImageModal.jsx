import React, { useState } from 'react';
import styles from './ImagesModal.module.css'

const ImageModal = ({ images, src, alt, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      // Increment the index to display the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      // Decrement the index to display the previous image
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
  return (
    <div className={`${styles.imageModal} p-14
    
    
    
    
    
    
    `}>
      <span className={styles.modalClose} onClick={onClose}>
        &times;
      </span>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <div className={styles.modalArrows}>
        <span className={styles.modalArrow} onClick={handlePrev}>
          &#8249; Prev
        </span>
        <span className={styles.modalArrow} onClick={handleNext}>
          Next &#8250;
        </span>
      </div>
    </div>
  );
};

export default ImageModal;
