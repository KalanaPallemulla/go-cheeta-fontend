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
import ManageDrivers from "./admin/ManageDriversAdd";
import ManageDriverEdit from "./admin/ManageDriverEdit";

import AddVehicle from "./admin/ManageVehicles/AddVehicle";
import EditVehicle from "./admin/ManageVehicles/EditVehicle";
import AllVehicles from "./admin/ManageVehicles/AllVehicles";

//Driver Pages
import Driver from "./driver/DriverHome";
import DriverLogin from "./driver/DriverLogin";
import ManageDriversAll from "./admin/ManageDriversAll";
import AllBranches from "./admin/ManageBranches/AllBranches";
import EditBranch from "./admin/ManageBranches/EditBranch";
import AddBranch from "./admin/ManageBranches/AddBranch";
import AllCategories from "./admin/ManageVehicleCategory/AllCategories";
import EditVehicleCategory from "./admin/ManageVehicleCategory/EditVehicleCategory";
import AddVehicleCategory from "./admin/ManageVehicleCategory/AddVehicleCategory";
import BookingDetails from "./admin/AdminHome/BookingDetails";

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
        <Route path="/manage-driver-add" element={<ManageDrivers />} />
        <Route path="/manage-driver-edit/:id" element={<ManageDriverEdit />} />
        <Route path="/manage-drivers" element={<ManageDriversAll />} />

        <Route path="/manage-vehicles" element={<AllVehicles />} />
        <Route path="/manage-vehicle-edit/:id" element={<EditVehicle />} />
        <Route path="/manage-vehicle-add" element={<AddVehicle />} />

        <Route path="/manage-branches" element={<AllBranches />} />
        <Route path="/manage-branch-edit" element={<EditBranch />} />
        <Route path="/manage-branch-add" element={<AddBranch />} />

        <Route path="/manage-categories" element={<AllCategories />} />
        <Route
          path="/manage-category-edit/:id"
          element={<EditVehicleCategory />}
        />
        <Route path="/manage-category-add" element={<AddVehicleCategory />} />
        <Route path="/booking-details/:id" element={<BookingDetails />} />
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
