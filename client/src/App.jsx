import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
//Pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
