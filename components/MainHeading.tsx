import React from 'react'

type HeadingProps = { children: string, additionalStyles ?: string }
function MainHeading({ children, additionalStyles }: HeadingProps) {
    return (
        <h2 className={`${additionalStyles ? additionalStyles : ''} text-6xl font-vinila leading-[64px] tracking-tight`}>
            {children}
        </h2>
    )
}

export default MainHeading
