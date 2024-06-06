"use client";

import { Dispatch, SetStateAction } from 'react'

interface TabProps {
  label: string;
  isActive?: boolean;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

function Tab({ label, isActive = false, setActiveTab }: TabProps) {
  return (
    <button
      className={`${isActive ? 'bg-purple-200' : ''} py-2 px-5 rounded-full h-10 text-[16px] font-bold text-slate-900`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  )
}

export default Tab
