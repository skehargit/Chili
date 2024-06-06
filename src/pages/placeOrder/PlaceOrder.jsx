import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function PlaceOrder() {
  const { getTotalCartAmount, token, foodList, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="pt-10 min-h-screen">
      <div className="w-full h-screen flex items-center justify-center">
        <form onSubmit={placeOrder} action="">
          <div className="flex flex-col gap-2">
            {" "}
            <div>
              <p className="text-2xl font-semibold">Shipping Address </p>
              <p></p>
            </div>
            <div className="flex max-[500px]:flex-col gap-2">
              <input
                className="p-2 rounded-lg"
                name="firstName"
                value={data.firstName}
                onChange={onChangeHandler}
                type="text"
                placeholder="firstname"
              />
              <input
                className="p-2 rounded-lg"
                name="lastname"
                value={data.lastName}
                onChange={onChangeHandler}
                type="text"
                placeholder="last name"
              />
            </div>
            <div className="flex max-[500px]:flex-col gap-2">
              <input
                className="p-2 rounded-lg"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
                type="email"
                placeholder="email"
              />
              <input
                className="p-2 rounded-lg"
                name="street"
                value={data.street}
                onChange={onChangeHandler}
                type="text"
                placeholder="street"
              />
            </div>
            <div className="flex max-[500px]:flex-col gap-2">
              <input
                className="p-2 rounded-lg"
                name="city"
                value={data.city}
                onChange={onChangeHandler}
                type="text"
                placeholder="city"
              />
              <input
                className="p-2 rounded-lg"
                name="state"
                value={data.state}
                onChange={onChangeHandler}
                type="text"
                placeholder="state"
              />
            </div>
            <div className="flex max-[500px]:flex-col gap-2">
              <input
                className="p-2 rounded-lg"
                name="zipcode"
                value={data.zipcode}
                onChange={onChangeHandler}
                type="text"
                placeholder="zipcode"
              />
              <input
                className="p-2 rounded-lg"
                name="country"
                value={data.country}
                onChange={onChangeHandler}
                type="text"
                placeholder="country"
              />
            </div>
            <input
              className="p-2 rounded-lg"
              name="phone"
              value={data.phone}
              onChange={onChangeHandler}
              type="text"
              placeholder="phone"
            />
          </div>
          <div className="flex gap-2 border border-zinc-700 p-2 rounded-lg">
            <p>CartTotal - </p>
            <p>{getTotalCartAmount()}</p>
          </div>

          <button className="bg-red-500 rounded-lg w-full p-2" type="submit">
            procced to payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder;
