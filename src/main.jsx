import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.jsx";
import StoreContextProvider from "./context/StoreContext.jsx";
import Profile from "./pages/profile/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="placeorder" element={<PlaceOrder />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
