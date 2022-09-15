import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcHome, FcAutomotive, FcBusinessman } from "react-icons/fc";
import { BiExit } from "react-icons/bi";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = window.localStorage.getItem("user");
  const driver = window.localStorage.getItem("driver");

  const handleClick = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("driver");

    navigate("/");
  };

  return (
    <div>
      <div className="block">
        <div className="flex justify-center">
          <div className="md:w-1/5 w-4/5 h-16  mb-8 rounded-full shadow-lg fixed bottom-0 bg-indigo-700/30 backdrop-blur-xl flex items-center px-8 justify-center">
            <div className="flex flex-row space-x-12">
              <div className="flex justify-center flex-col items-center">
                <Link
                  to="/"
                  className={`AF font-bold ${
                    pathname === "/" ? "text-blue-700" : "text-white"
                  } text-4xl hover:text-blue-700`}
                >
                  <FcHome />
                </Link>
                <h1 className=" DF text-md text-white font-bold">Home</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <Link
                  to="/booking"
                  className={`AF font-bold ${
                    pathname === "/blogs" || pathname === "blog"
                      ? "text-blue-700"
                      : "text-white"
                  } text-4xl hover:text-blue-700`}
                >
                  <FcAutomotive />
                </Link>
                <h1 className=" DF text-md text-white font-bold">Cab</h1>
              </div>

              <div className="flex justify-center flex-col items-center">
                <Link
                  to="/driver"
                  className={`AF font-bold ${
                    pathname === "/support" ? "text-blue-700" : "text-white"
                  } text-4xl hover:text-blue-700`}
                >
                  <FcBusinessman />
                </Link>
                <h1 className="ml-1 DF text-sm text-white font-bold">Driver</h1>
              </div>
              {(auth || driver) && (
                <div
                  className="flex justify-center flex-col items-center"
                  onClick={handleClick}
                >
                  <div
                    // to="/driver"
                    className={`AF font-bold ${
                      pathname === "/support" ? "text-blue-700" : "text-white"
                    } text-4xl hover:text-blue-700`}
                  >
                    <BiExit />
                  </div>
                  <h1 className="ml-1 DF text-sm text-white font-bold">
                    Logout
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
