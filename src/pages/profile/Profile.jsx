import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email")
    setToken("");
      
  }
  
  useEffect(()=>{
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
            <Link to={'/'} onClick={logout}  className='text-lg block font-semibold capitalize border-b border-zinc-700 p-3 '>Logout</Link>
            <Link to={'/cart'} className='text-lg block font-semibold capitalize border-b border-zinc-700 p-3'>my cart</Link>
            <Link className='text-lg block font-semibold capitalize border-b border-zinc-700 p-3'>my orders</Link>
            <Link className='text-lg block font-semibold capitalize border-b border-zinc-700 p-3'>Shipping Address</Link>
            <Link className='text-lg block font-semibold capitalize border-b border-zinc-700 p-3'>Settings</Link>
            
        </div>
    </div>
  )
}

export default Profile