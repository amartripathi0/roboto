import React from 'react'

function Tab({ label, isActive = false }: { label: string, isActive?: boolean }) {
  return (
    <button className={`${isActive ? 'bg-purple-200' : ''} py-2 px-5 rounded-full h-10 text-[16px] font-bold text-slate-900
    `}>
      {label}
    </button>
  )
}

export default Tab
