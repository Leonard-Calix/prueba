import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Main from "./screens/Main";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <div className="container mt-3" >
    <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Login />} />
      </Routes>
    </div>
      
    </BrowserRouter>
  );
};

export default App;
