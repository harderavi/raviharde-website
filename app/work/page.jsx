"use client"
import React, { useEffect, useState, useRef } from 'react'

import ImageGallery from '@/components/ImageGallery/ImageGallery'
import {workGalleryImages} from '@/lib/data'
import ImageModal from '@/components/ImageModal/ImageModal'

const page = () => {
    const [displayedImages, setDisplayedImages] = useState([])
    const [loadMoreCount, setLoadMoreCount] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreImages, setHasMoreImages] = useState(true);
    const loadMoreButtonRef = useRef();

    const openModal = (image) => {
        console.log("Clicked")
        setSelectedImage(image);
        setModalOpen(true);

      };
    
      const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
      };
    const loadMoreImages = ()=>{ 
        if (hasMoreImages) {
            setIsLoading(true);
            setTimeout(() => {
              const additionalImages = workGalleryImages.slice(
                displayedImages.length,
                displayedImages.length + 5
              );
      
              setDisplayedImages([...displayedImages, ...additionalImages]);
      
              if (additionalImages.length === 0) {
                setHasMoreImages(false);
                // Update the button visibility immediately
              }
      
              setIsLoading(false);
            }, 500); // Simulate loading delay
          }
    }
    useEffect(() => {
        // Initially, load a set number of images
        const initialImages = workGalleryImages.slice(0, 5);
        setDisplayedImages(initialImages);
      }, []);
    

  return (
    <div className='max-w-screen-xl m-auto'>
    <ImageGallery images={displayedImages}  onClick={openModal} onLoadMore={loadMoreImages}/>
    {modalOpen && (
        <ImageModal
        images ={displayedImages}
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
       {!hasMoreImages && (
        <p className='text-center p-9'></p>
      )}
      {hasMoreImages && !isLoading && (
        <div className='flex items-center justify-center '>
        <button ref={loadMoreButtonRef} onClick={loadMoreImages} className="mt-30 mb-10 p-3 pt-1 pb-1  load-more-button rounded-lg  bg-white text-black">
          Load More{hasMoreImages} 
        </button>
        </div>
      )}
      </div>
  )
}

export default page  