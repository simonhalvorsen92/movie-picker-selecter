import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/pages/Start";

import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import { Layout } from "./components/Layout";
import UserVy from "./components/pages/UserVy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route path="/" element={<Layout></Layout>}></Route> */}
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Start />} />
            <Route path="Registrera" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="Min lista" element={<UserVy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
