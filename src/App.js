import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./screens/Main";
import Users from "./screens/Users";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <div className="container mt-3" >
    <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
      
    </BrowserRouter>
  );
};

export default App;
