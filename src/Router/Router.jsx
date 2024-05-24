import React from "react";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bascet from "../Pages/Basket/Bascet";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Dashboard from "../Pages/Dashboard/Dashboard";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Bascet />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
