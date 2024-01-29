"use client"
import { useThemeMode } from '@/context/ThemeModeContext'
import React from 'react'
import DarkModeSun from '../SvgComponents/DarkModeSun'

const ThemeModeButton = () => {
    const {themeMode, toggleThemeMode} = useThemeMode()
  return (
    <button onClick={toggleThemeMode} className='cursor-default'>
        <span className='flex gap-1'><DarkModeSun/></span>
    </button>
  )
}

export default ThemeModeButton;