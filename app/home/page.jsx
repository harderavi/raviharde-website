import ChromaArt from '@/components/ChromaArt/ChromaArt'
import HomeAboutContent from '@/components/HomeAboutContent/HomeAboutContent'
import MySkills from '@/components/MySkills/MySkills'
import React from 'react'

const home = () => {
  return (
    <>
      <div className=' max-w-screen-xl m-auto	 flex gap-10 max-md:flex-col'>
        <div className='w-3/5 p-4 max-md:w-full'>
          <HomeAboutContent />
        </div>
        <div className='w-2/5 p-4 max-md:w-full '>
          <ChromaArt />
        </div>

      </div>
      <div className='max-w-screen-xl m-auto mb-10'>
        <MySkills />
      </div>
      <div className='max-w-screen-xl m-auto mb-10'>
        <h2>Portfolio Work</h2>
        
      </div>
    </>
  )
}

export default home