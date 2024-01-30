import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './ImagesGallert.module.css'
const ImageGallery = ({images, onLoadMore,onClick}) => {
    const [ref, inView] = useInView({
        triggerOnce:true
    })
    useEffect(()=>{
        if (inView) {
            onLoadMore();
          }
    },[inView, onLoadMore])

  return (
    <div className={`${styles.imageGallery} grid  grid-cols-1 p-5 sm:p-0 sm:grid-cols-3 gap-10 mb-10`}>
      {images.map((image, i)=>(
        <img
        key={i}
        src={image.src} 
        alt={image.imageDescription}
        onClick={() => onClick(image)}
        loading="lazy"
      />
      ))

      }
      
    </div> 
  )
}

export default ImageGallery