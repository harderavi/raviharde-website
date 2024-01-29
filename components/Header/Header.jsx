import React from 'react'
import Brand from '../Brand/Brand'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import ThemeModeButton from '../ThemeModeButton/ThemeModeButton'

const Header = () => {
  return (
    <div className='max-w-screen-xl m-auto flex justify-between items-center pb-5 pt-10 '>
        <Link href={'/home'}><Brand /></Link> 
        <div className='flex gap-10'>
        <Navbar/>
        <ThemeModeButton/>
        </div>
    </div>
  )
}

export default Header