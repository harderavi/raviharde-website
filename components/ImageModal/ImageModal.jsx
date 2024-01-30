// Importing React and other dependencies

import React, { useState, useRef } from 'react';
import styles from './ImagesModal.module.css';

const ImageModal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleClose = (e) => {
    if (e.target.classList.contains(styles.imageModal)) {
      onClose();
    }
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const offsetX = clientX - left;
    const offsetY = clientY - top;

    const scrollX = (offsetX / width) * (containerRef.current.scrollWidth - containerRef.current.clientWidth);
    const scrollY = (offsetY / height) * (containerRef.current.scrollHeight - containerRef.current.clientHeight);

    containerRef.current.scrollLeft = scrollX;
    containerRef.current.scrollTop = scrollY;
  };

  return (
    <div
      className={`${styles.imageModal} ${isZoomed ? styles.zoomed : ''} p-14`}
      onClick={handleClose}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <span className={styles.modalClose} onClick={onClose}>
        &times;
      </span>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className={`${isZoomed ? styles.zoomed : ''}`}
        onClick={handleImageClick}
      />
      <div className={styles.modalArrows}>
        <span className={styles.modalArrow} onClick={handlePrev}>
          &#8249;
        </span>
        <span className={styles.modalArrow} onClick={handleNext}>
          &#8250;
        </span>
      </div>
    </div>
  );
};

export default ImageModal;
