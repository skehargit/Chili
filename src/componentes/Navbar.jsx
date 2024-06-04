import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { StoreContext } from "../context/StoreContext";
import { useEffect } from "react";
function Navbar({ setShowUser }) {
  const [menu, setMenu] = useState("home");
  const [cnt,setCnt]=useState(0)
  const { cartItem,token,setToken} = useContext(StoreContext);
  
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    
  }
  useEffect(()=>{
    let cntItem =0;
    for(let item in cartItem){
      if(cartItem[item]>0)cntItem++
    }
    setCnt(cntItem)
  })
  return (
    <div className="w-full h-fit  fixed top-0 z-[100]">
      <div className="w-full h-full py-3 flex items-center justify-between px-[10vw]">
        <div>
          <h1 className="text-2xl font-semibold capitalize">chili.</h1>
        </div>
        <div>
          <ul className="flex gap-3 capitalize">
            <li
              onClick={() => setMenu("home")}
              className={`${
                menu === "home" ? "border-b-2 border-zinc-950 " : ""
              } cursor-pointer`}
            >
              home
            </li>
            <li
              onClick={() => setMenu("menu")}
              className={`${
                menu === "menu" ? "border-b-2 border-zinc-950 " : ""
              } cursor-pointer`}
            >
              menu
            </li>
            <li
              onClick={() => setMenu("contact")}
              className={`${
                menu === "contact" ? "border-b-2 border-zinc-950 " : ""
              } cursor-pointer`}
            >
              contact
            </li>
            <li
              onClick={() => setMenu("about")}
              className={`${
                menu === "about" ? "border-b-2 border-zinc-950 " : ""
              } cursor-pointer`}
            >
              about
            </li>
          </ul>
        </div>
        <div className="flex gap-3 capitalize">
          <Link to="/cart">
            <button className=" p-2  relative">
              <FaCartShopping className="text-xl" />
              {cnt > 0 ? (
                <div className="bg-red-500 h-[15px] w-[15px] absolute top-0 right-0 rounded-full flex items-center justify-center">
                  {cnt}
                </div>
              ) : (
                <></>
              )}
            </button>
          </Link>
          {!token?<button className="p-2" onClick={() => setShowUser(true)}>
            sign in
          </button>:<Link to={"/profile"}>
          <button className="p-2">
            <FaCircleUser className="text-xl" />
            {/* <div className="">
              <ul>
                <li className="p-2 border border-red-500"><p>orders</p></li>
                <li onClick={logout} className="p-2 border border-red-500"><p>logout</p></li>
              </ul>
            </div> */}
          </button></Link>}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
