import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./client/Home";
import Register from "./client/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
