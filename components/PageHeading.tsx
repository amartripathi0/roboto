import React from 'react'
type HeadingProps = { children: string, additionalStyles ?: string }

function PageHeading({ children, additionalStyles }: HeadingProps) {
    return (
        <h3 className={`${additionalStyles ? additionalStyles : ''} text-[44px] leading-[48px] text-slate-900 font-bold font-vinila`}>
            {children}
        </h3>
    )
}

export default PageHeading
