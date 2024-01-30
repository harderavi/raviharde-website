"use client"
import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaFigma, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiMaterialdesign, SiExpress, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiVisualstudio } from "react-icons/si";
import style from "./MySkills.module.css"
import { skills } from "@/lib/data"
import { useThemeMode } from '../../context/ThemeModeContext'
const MySkills = () => {
    const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
    const { themeMode } = useThemeMode();

    const cardGrid ='grid grid-cols-4  md:grid-cols-8 gap-0 ';
    const cardStyles ='dark:bg-[#161922] bg-white  aspect-square  flex flex-col justify-between  font-thin items-stretch p-2 sm:p-5 border ml-[-1px] border-gray-200 dark:border-gray-700 transition  duration-10';
    const cardTextStyles ='text-sm	sm:text-base font-medium	dark:font-thin   text-black dark:text-white';
    const iconMapping = {
        FaHtml5,
        FaCss3,
        FaFigma,
        SiJavascript,
        SiTypescript,
        FaReact,
        SiRedux,
        SiMaterialdesign,
        SiTailwindcss,
        SiExpress,
        FaNodeJs,
        SiAdobexd,
        SiAdobephotoshop,
        SiAdobeillustrator,
        FaGitAlt,
        SiVisualstudio


        // Add more icons if needed
    };
    const [filterCategory, setFilterCategory] = useState('')
    const handleMouseMove = (e) => {
        const card = e.currentTarget;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = {
            x: cardRect.left + cardRect.width / 2,
            y: cardRect.top + cardRect.height / 2,
        }; card

        const angleX = (e.clientY - cardCenter.y) / 1.6; // Adjust the sensitivity
        const angleY = (e.clientX - cardCenter.x) / 1.6; // Adjust the sensitivity
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

    };
    const handleMouseOut = (e) => {
        const card = e.target;

        card.style.transform = `rotateX(0deg) rotateY(0deg)`;

    };
    const filterHandleMouseEnter = (category) => {
        setFilterCategory(category)
    }
    const filterHandleMouseOut = () => {
        setFilterCategory('')
    }
    // Get unique categories
    const uniqueCategories = [...new Set(skills.map(skill => skill.category))];
    return (
        <div className={`max-w-screen-xl m-auto relative ${style.skillContainer}`}>
            <h1 className='text-3xl font-normal max-sm:mb-8 max-sm:mt-8'>Skills</h1>
            <div className='pt-5 pb-10 flex flex-wrap	gap-6 max-sm:hidden '>
                {uniqueCategories.map(category => (
                    <span className='pt-2 pb-2 pl-5 pr-5 text-xs text-gray-600 dark:hover:text-white border border-gray-700 rounded-full inline-block cursor-pointer' onMouseEnter={() => filterHandleMouseEnter(category)} onMouseOut={filterHandleMouseOut}>{category}</span>
                ))

                }
            </div>
            <div className={`${cardGrid}`}>
                {skills.map((skill, index) => (
                    <div className={` card ${cardStyles} ${style.skillCard} ${filterCategory && filterCategory !== skill.category ? style.blurEffect : ''}`
                    }
                        style={{ transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)` }}
                        key={index} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                           { themeMode  ? (
                        <div className={`icon ${style.icon}`}>
                            {typeof skill.icon === 'string' && iconMapping[skill.icon] && React.createElement(iconMapping[skill.icon])}
                            {React.isValidElement(skill.icon) && skill.icon}
                        </div>
                           ):(
                        <div className={` ${style.iconRed}`}>
                            {typeof skill.icon === 'string' && iconMapping[skill.icon] && React.createElement(iconMapping[skill.icon])}
                            {React.isValidElement(skill.icon) && skill.icon}
                        </div>
                )
                           }
                        <p className={`${cardTextStyles}`}>{skill.name}</p>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default MySkills