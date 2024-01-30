import React from 'react'
import {homeAboutContent} from '@/lib/data'
import MorphText from '../MorphText/MorphText';
const HomeAboutContent = () => {
    const {heading, content, contentParaTwo} = homeAboutContent;
  return (
    <div className='font-medium max-md:text-base dark:font-thin text-[26px] container mx-auto  '>
        <h1 className='text-2xl  md:text-[30px] font-normal leading-8	mb-4'>{heading} Ravi Harde, <br className='md:hidden inline-block	'></br><MorphText/>. </h1>
        <p>
        {content}
        </p>
        <br></br>
        <p>{contentParaTwo}</p>

    </div>
  )
}

export default HomeAboutContent