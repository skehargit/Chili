import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
function User({setShowUser}) {
    const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='fixed top-0 w-[100vw] min-h-screen z-[99] bg-black/30 flex items-center justify-center backdrop-blur'>
        <div className=' border border-zinc-700 bg-black w-[300px] p-2'>
        <form action="" className='user-popup'>
            <div className='flex  justify-between'>
                <h2 className='font-semibold text-xl w-full flex justify-center py-4'>{currState}</h2>
                <div className="cros h-[25px] w-[25px] bg-red-500 rounded-bl-xl cursor-pointer flex items-center justify-center " onClick={()=>setShowUser(false)}><RxCross2 /></div>
            </div>
            <div className='flex flex-col gap-3'>
                {currState==='Login'?<></>:<input type="text" placeholder='your name' required className='py-2 border-b w-full bg-black'/>}
               
                <input type="email" placeholder='email' required className='py-2 border-b w-full bg-black'/>
                <input type="password" placeholder='password' required className='py-2 border-b w-full bg-black' />
                
                <div className='flex items-center'>
                    <input type="checkbox" required />
                    <p>Lorem ipsum, dolor sit consectetur...</p>
                </div>
                <button className='bg-red-500 rounded-full py-2'>{currState==="Sign Up"?"Create Account":"Login"}</button>
                {currState==='Login'?<p className='flex gap-2'>Create a new account ? <span onClick={()=>setCurrState('Sign Up')} className='border-b text-red-500 border-red-500 cursor-pointer'>click here</span></p>:<p className='flex gap-2'>Already have an account ?<span onClick={()=>setCurrState('Login')} className='border-b text-red-500 border-red-500 cursor-pointer'>Login here</span></p>}
            </div>
        </form>
    </div>
    </div>
  )
}

export default User