import React from 'react'

function HeadPara({children , additionalStyles } : {children : string , additionalStyles ?: string}) {
  return (
    <p 
    className={`${additionalStyles} font-normal text-xl leading-7 -tracking-[2%]`}>{children}</p>
  )
}

export default HeadPara
