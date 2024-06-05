import Image from 'next/image'
import React from 'react'
import arrowImg from '../public/assets/arrowImg.png'
import whiteArrowImg from '../public/assets/whiteArrow.png'
function Button({label, additionalStyles, whiteArrow} : {label : string, additionalStyles ?: string, whiteArrow ?: boolean}) {
  return (
    <button className={`${additionalStyles} flex justify-center w-fit items-center gap-2 py-[10px] px-9 border-2 border-slate-900 rounded-3xl text-base font-bold text-slate-900`}>
    {label}  
    {
    whiteArrow ? 
    <Image
    src={whiteArrowImg}
    alt='arrowImg'
    height={1000}
    width={1000}
    className='h-4 w-4'
    />
    : 
    <Image
    src={arrowImg}
    alt='arrowImg'
    height={1000}
    width={1000}
    className='h-4 w-4'
    />
    }
    </button>
  )
}

export default Button
