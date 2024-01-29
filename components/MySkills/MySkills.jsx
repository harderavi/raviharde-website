"use client"
import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaFigma, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiMaterialdesign, SiExpress, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiVisualstudio } from "react-icons/si";
import style from "./MySkills.module.css"
import { skills } from "@/lib/data"

const MySkills = () => {
    const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });

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
            <h1 className='text-3xl font-normal'>Skills</h1>
            <div className='pt-5 pb-10 flex gap-6'>
                {uniqueCategories.map(category => (
                    <span className='pt-2 pb-2 pl-5 pr-5 text-xs text-gray-600 dark:hover:text-white border border-gray-700 rounded-full inline-block cursor-pointer' onMouseEnter={() => filterHandleMouseEnter(category)} onMouseOut={filterHandleMouseOut}>{category}</span>
                ))

                }
            </div>
            <div className='grid grid-cols-8 gap-0 '>
                {skills.map((skill, index) => (
                    <div className={` ${style.skillCard} ${filterCategory && filterCategory !== skill.category ? style.blurEffect : ''}
             bg-[#161922] dark:bg-transparent  aspect-square  flex flex-col justify-between  font-thin items-stretch p-5 border ml-[-1px]  border-gray-700 transition  duration-10`
                    }
                        style={{ transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)` }}
                        key={index} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                        <div className={`icon ${style.icon} dark:*:fill-red *:pb-10`}>
                            {typeof skill.icon === 'string' && iconMapping[skill.icon] && React.createElement(iconMapping[skill.icon])}
                            {React.isValidElement(skill.icon) && skill.icon}
                        </div>
                        <p className='font-thin  text-gray-200'>{skill.name}</p>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default MySkills