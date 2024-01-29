import React, { useState } from 'react'

const InfoTip = ({ buttonText, tipText }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      <button className='rounded-full w-6 h-6 mr-4 bg-white text-black relative' onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
        {buttonText}
        {showInfo &&
          <div className='rounded-3xl rounded-bl-none absolute left-0 bottom-[100%] bg-white p-3 drop-shadow-[0 0 43px rgb(0 0 0,1 )] min-w-[300px]'>
            {tipText}
          </div>
        }
      </button>
    </>
  )
}
export default InfoTip