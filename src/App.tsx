import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import { Layout } from "./components/Layout";
import UserVy from "./components/pages/UserVy";
import UsersList from "./components/pages/UsersList";
import UsersRatedList from "./components/pages/UsersRatedList";

function App() {
  function handleLogin(username: string, password: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route path="/" element={<Layout></Layout>}></Route> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="Registrera"
              element={<Register onSubmit={handleLogin} />}
            />
            <Route path="Login" element={<Login onSubmit={handleLogin} />} />

            <Route path="Sök" element={<UserVy />} />
            <Route path="Min lista" element={<UsersList />} />
            <Route path="Rated Filmer" element={<UsersRatedList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
