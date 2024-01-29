"use client"
import React, { useState,useEffect } from 'react'
import style from './ChromaArt.module.css'
import InfoTip from '../InfoTip/InfoTip';

const ChromaArt = () => {
    const randomNumber = Math.random() < 0.5 ? 6 : 8;

console.log(randomNumber);
    const numberCells = 8;
    const [cellsArray, setCellsArray] = useState(Array.from({ length: numberCells*numberCells }, (_, index) => index + 1))
    
    const cellSize = 1; // Adjust the size as needed

    
    // Calculate the number of elements to randomly select (10% of the array length)
    const elementsToSelect = Math.ceil(cellsArray.length * 0.05);

    // Randomly select 10% of the elements from cellsArray
    const selectedElements = Array.from({ length: elementsToSelect }, () => {
      const randomIndex = Math.floor(Math.random() * cellsArray.length);
      return cellsArray[randomIndex];
    });


    const gridContainerStyle = {
      gridTemplateColumns: `repeat(${numberCells}, ${cellSize}fr)`,
    };
    const palettes = [
        ['#711DB0', '#C21292', '#EF4040', '#FFA732'],
        ['#DC8686', '#36EEE0', '#F652A0', '#4C5270'],
        ['#542E71', '#FB3640', '#FDCA40', '#A799B7'],
        ['#00CED1', '#20B2AA', '#008B8B', '#5F9EA0']
      ];
      const selectedPalette = palettes[Math.floor(Math.random() * palettes.length)];
      const [counter, setCounter] = useState(0)
      
  useEffect(() => {
    const timer = setTimeout(() => {
        setCounter(counter + 1); // Update state after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [counter]); // Re-run effect on state change
  return (
    <div>
<div className='art-container'>


<div className={style.gridContainer}  style={gridContainerStyle}>
    {
        cellsArray.map((cell, i)=>(
            <div className={style.gridItem }
            style= {{
                backgroundColor: selectedPalette[Math.floor(Math.random() * selectedPalette.length)],
                borderRadius: ['0 0 0 100%', '100% 0 0 0', '0 100% 0 0', '0 0 100% 0'][Math.floor(Math.random() * 4)],
                opacity:['0'][Math.floor(Math.random() * 20)],
                gridArea: selectedElements.includes(i) ? 'span 2 / span 2' : '',
               
            }
              }
            >{}</div>
        ))
    }
    </div>
    <InfoTip buttonText={'i'} tipText={'The grid is populated with cells, each with a random background color, border radius, and opacit'}/>
    <button type='button' className='font-thin text-sm pt-5' onClick={()=>{ setCellsArray(Array.from({ length: numberCells*numberCells }, (_, index) => index + 1))}}><span className='border-2 rounded-full w-3 h-3 mr-2 inline-block'></span>Generate fresh artwork by clicking here.</button>
</div>
    </div>
  )
}

export default ChromaArt