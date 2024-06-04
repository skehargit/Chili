import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
const Profile = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [imgurl,setImgurl]=useState('');
  
  // const navigate=useNavigate();
  // const logout=()=>{
  //   localStorage.removeItem("token");
  //   setToken("");
  //   navigate("/");
    
  // }
  useEffect(()=>{
    // if(!localStorage.getItem("tudu"))console.log("nothing")
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  });
  return (
    <div className='pt-10 min-h-screen'>
        <h2 className='text-2xl font-semibold capitalize border-b border-zinc-700 p-3'>my profile</h2>
        <div className='flex h-fit gap-5 p-3 border-b border-zinc-700'>
            <div className='h-[60px] w-[60px] rounded-full overflow-hidden'><img src={`https://ui-avatars.com/api/?name=${name}`} alt="" /></div>
            <div className='flex flex-col font-semibold text-xl justify-between'><h3>{name}</h3><h3>{email}</h3></div>
        </div>
        <div>
            <div  className='text-lg font-semibold capitalize border-b border-zinc-700 p-3'>Logout</div>
            <div className='text-lg font-semibold capitalize border-b border-zinc-700 p-3'>my cart</div>
            <div className='text-lg font-semibold capitalize border-b border-zinc-700 p-3'>my orders</div>
            <div className='text-lg font-semibold capitalize border-b border-zinc-700 p-3'>Shipping Address</div>
            <div className='text-lg font-semibold capitalize border-b border-zinc-700 p-3'>Settings</div>
            
        </div>
    </div>
  )
}

export default Profile