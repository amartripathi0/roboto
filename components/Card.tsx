import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    cardImg:  StaticImageData
    cardTitle: string
    cardDesc: string
}

function Card({ cardImg, cardTitle, cardDesc }: CardProps) {
    return (
        <div className='flex flex-col gap-6  w-[368px]'>
            <div className='relative h-[368px] aspect-square rounded-[32px]'>
                <Image
                    src={cardImg}
                    alt={"card-img"}
                    height={2000}
                    width={2000}
                    className=' h-full w-full rounded-[32px]'
                />
                <div className="absolute top-0 left-0 rounded-[32px] bg-gradient-to-br from-[#180020] h-full w-full z-5  opacity-95"></div>
                <h3 className='absolute bottom-0 font-bold text-2xl text-slate-50 m-6 font-vinila'>
                    {cardTitle}
                </h3>
            </div>
            <p className='font-normal text-base text-slate-900 h-16 w-full'>
                {cardDesc}
            </p>
        </div>
    )
}

export default Card







