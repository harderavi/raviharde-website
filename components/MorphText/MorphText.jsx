"use client"
import React, { useEffect, useState } from 'react';
import style from './MorphText.module.css'
const MorphText = () => {
    const words = [
        'UI/UX Designer',
        'Founder',
        'Frontend Developer',
      ];
      const [part, setPart] = useState('');
      const [i, setI] = useState(0);
      const [offset, setOffset] = useState(0);
      const [forwards, setForwards] = useState(true);
      const [skipCount, setSkipCount] = useState(0);
      const skipDelay = 15;
      const speed = 50;
    
      useEffect(() => {
        const wordFlick = setInterval(() => {
          if (forwards) {
            if (offset >= words[i].length) {
              setSkipCount((prevCount) => prevCount + 1);
              if (skipCount === skipDelay) {
                setForwards(false);
                setSkipCount(0);
              }
            }
          } else {
            if (offset === 0) {
              setForwards(true);
              setI((prevI) => (prevI + 1) % words.length);
              setOffset(0);
              if (i >= words.length) {
                setI(0);
              }
            }
          }
          const currentPart = words[i].substr(0, offset);
          if (skipCount === 0) {
            if (forwards) {
              setOffset((prevOffset) => prevOffset + 1);
            } else {
              setOffset((prevOffset) => prevOffset - 1);
            }
          }
          setPart(currentPart);
        }, speed);
    
        return () => clearInterval(wordFlick);
      }, [forwards, i, offset, skipCount, words]);
    
      return <span className="word">{part}</span>;
};

export default MorphText;
