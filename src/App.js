import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Client Pages
import Home from "./client/Home";
import Login from "./client/Login";
import Register from "./client/Register";
import Booking from "./client/Booking";

//Admin Pages
import Admin from "./admin/AdminHome";
import PrivateRoute from "./PrivateRoute";

//Driver Pages
import Driver from "./driver/DriverHome";
import DriverLogin from "./driver/DriverLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Routes>
        <Route
          path="/driver"
          element={
            <PrivateRoute type="driver">
              <Driver />
            </PrivateRoute>
          }
        />
        <Route path="/driverLogin" element={<DriverLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
