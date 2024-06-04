import { useState } from 'react'
import Navbar from './componentes/Navbar'
import { Outlet } from 'react-router-dom'
import User from './componentes/User';
import Footer from './componentes/Footer';

function App() {
  const [showUser,setShowUser]=useState(false);
  return (
    <div className=''>
      {showUser?<User setShowUser={setShowUser}/>:<></>}
      <Navbar setShowUser={setShowUser}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
