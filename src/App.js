import { Grid, stepContentClasses } from "@mui/material";
import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Bills from "./Pages/Bills";
import Customer from "./Pages/Customer";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Component/Register/Register";
import Term from "./Component/PrIvacyTerm/Term";
import Privacy from "./Component/PrIvacyTerm/Privacy";
import Dashboard from "./Pages/Dashboard";

const App = () => {  
  return (
    <BrowserRouter>
      <div className="h-content">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/term" element={<Term />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/bills" element={<ProtectedRoute><Bills /></ProtectedRoute>} />
          <Route path="/customer" element={<ProtectedRoute><Customer /></ProtectedRoute>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default App;
