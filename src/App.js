import { Grid } from "@mui/material";
import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Bills from "./Pages/Bills";
import Customer from "./Pages/Customer";
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className="h-content">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
