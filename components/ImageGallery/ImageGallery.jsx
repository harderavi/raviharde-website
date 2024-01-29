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
    <div className={styles.imageGallery}>
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