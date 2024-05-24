import React from 'react'
import { FaGrinHearts } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { GiNothingToSay } from "react-icons/gi";
import { IoExtensionPuzzle } from "react-icons/io5";
function HowTo() {
  return (
    <div className='h-screen relative w-full overflow-hidden'>
        <div className='relative z-[2] bg-zinc-900 w-full h-fit py-10 flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-semibold'>HOW TO</h3>
            <div className='flex grid grid-cols-4 max-[500px]:grid-cols-2'>
            <div className='border w-[100px] h-[100px] flex flex-col items-center justify-center uppercase font-semibold'><FaGrinHearts className='text-4xl' /><span>enjoy</span></div>
            <div className='border w-[100px] h-[100px] flex flex-col items-center justify-center uppercase font-semibold'><AiFillLike className='text-4xl' /><span>use</span></div>
            <div className='border w-[100px] h-[100px] flex flex-col items-center justify-center uppercase font-semibold'><GiNothingToSay className='text-4xl' /><span>say</span></div>
            <div className='border w-[100px] h-[100px] flex flex-col items-center justify-center uppercase font-semibold'><IoExtensionPuzzle className='text-4xl' /><span>make</span></div>
            </div>
        </div>
        
    </div>
  )
}

export default HowTo