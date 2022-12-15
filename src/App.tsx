import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/pages/Start";

import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Route path="/" element={<Layout></Layout>}></Route> */}
        <Routes>
          <Route path="/Start" element={<Start />} />
          <Route path="Registrera" element={<Register />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
