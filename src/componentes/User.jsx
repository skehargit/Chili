import React, { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
function User({ setShowUser }) {
  const [currState, setCurrState] = useState("Sign Up");
  const { url, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  // useEffect(()=>{
  //     console.log(data)
  // },[data])
  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currState == "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.data["name"]);
      localStorage.setItem("email", response.data.data["email"]);
      setShowUser(false);
    } else {
        //   alert(response.data.message);
        alert('password must have 8 char');
    }
  };
  return (
    <div className="fixed top-0 w-[100vw] min-h-screen z-[99] bg-black/30 flex items-center justify-center backdrop-blur">
      <div className=" border border-zinc-700 bg-black w-[300px] p-2">
        <form onSubmit={onLogin} action="" className="user-popup">
          <div className="flex  justify-between">
            <h2 className="font-semibold text-xl w-full flex justify-center py-4">
              {currState}
            </h2>
            <div
              className="cros h-[25px] w-[25px] bg-red-500 rounded-bl-xl cursor-pointer flex items-center justify-center "
              onClick={() => setShowUser(false)}
            >
              <RxCross2 />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                name="name"
                onChange={onchangeHandler}
                value={data.name}
                type="text"
                placeholder="your name"
                required
                className="py-2 border-b w-full bg-black"
              />
            )}

            <input
              name="email"
              onChange={onchangeHandler}
              value={data.email}
              type="email"
              placeholder="email"
              required
              className="py-2 border-b w-full bg-black"
            />
            <input
              name="password"
              onChange={onchangeHandler}
              value={data.password}
              type="password"
              placeholder="password"
              required
              className="py-2 border-b w-full bg-black"
            />

            <div className="flex items-center">
              <input type="checkbox" required />
              <p>Lorem ipsum, dolor sit consectetur...</p>
            </div>
            <button type="submit" className="bg-red-500 rounded-full py-2">
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
            {currState === "Login" ? (
              <p className="flex gap-2">
                Create a new account ?{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  className="border-b text-red-500 border-red-500 cursor-pointer"
                >
                  click here
                </span>
              </p>
            ) : (
              <p className="flex gap-2">
                Already have an account ?
                <span
                  onClick={() => setCurrState("Login")}
                  className="border-b text-red-500 border-red-500 cursor-pointer"
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
