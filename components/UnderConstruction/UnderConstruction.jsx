import React from 'react'
import ThemeModeButton from '../ThemeModeButton/ThemeModeButton'
import Brand from '../Brand/Brand'
const UnderConstruction = () => {
  const animatedText = "Ravi Harde"
  return (
    <>

      <div className='flex gap-10 flex-col items-center'>
        <ThemeModeButton />
        <Brand />
        <div className="deconstructed text-gray-400">
          <div>{animatedText}</div>
          <div>{animatedText}</div>
          <div>{animatedText}</div>
          <div>{animatedText}</div>
        </div>
        <p className='text-center'>Portfolio website coming soon</p>
      </div>
    </>
  )
}
export default UnderConstruction