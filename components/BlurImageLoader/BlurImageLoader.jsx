// components/BlurImageLoader.js
import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

const BlurImageLoader = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-md ${!imageLoaded ? 'bg-gray-200' : ''}`}>
      <ContentLoader
        speed={2}
        width={500}
        height={500}
        viewBox="0 0 500 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
      </ContentLoader>

      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-${imageLoaded ? '100' : '0'}`}
        style={{ filter: !imageLoaded ? 'blur(20px)' : 'none' }}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default BlurImageLoader;
