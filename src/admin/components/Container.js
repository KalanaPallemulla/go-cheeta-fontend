import React from "react";
import AdminNavbar from "./AdminNavbar";
import Logo from "../../assets/Logo.png";

const Container = ({ children }) => {
  return (
    <div className=" w-screen ">
      <div className="h-16 flex items-center justify-center px-8 top-0 fixed z-40 bg-white w-full shadow-sm">
        <div className="container grid grid-cols-5">
          <div className="col-span-1">
            <img className="h-16" src={Logo} alt="Loading..." />
          </div>
          <div className="col-span-3 flex items-center justify-center"></div>
          <div className="col-span-1 flex justify-end items-center space-x-2">
            <div className="font-serif text-lg text-gray-600">Logout</div>
            <div className="h-10 w-10 rounded-full flex justify-center items-center font-bold border border-gray-300 ">
              K
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 left-0 fixed">
        <AdminNavbar />
      </div>
      <div className="w-4/5 ml-60 h-full mt-16 p-8">{children}</div>
    </div>
  );
};

export default Container;
