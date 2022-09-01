import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cab from "../../assets/cab.gif";
import Hi from "../../assets/hi.gif";
import Navbar from "../../client/components/Navbar";

const DriverLoginView = () => {
  const [username, setUsername] = useState("");
  const [pulse, setPulse] = useState(false);

  const handleSubmit = (e) => {};

  useEffect(() => {
    if (username) {
      setPulse(true);
    } else {
      setPulse(false);
    }
  }, [username]);

  // console.log(user);
  return (
    <>
      <Navbar />
      <div className="md:grid md:grid-cols-2">
        <div className="flex h-screen bg-blue-700 w-full justify-center px">
          <div className="m-auto">
            <div className="mb-2 flex flex-row items-center justify-center">
              <h1 className="TF md:text-5xl text-3xl font-bold text-white text-center">
                Go Cheeta Driver
              </h1>
              <img className="h-16" src={Hi} alt="Loading..." />
            </div>

            <h1 className="TF md:text-md lg:text-md text-sm font-bold text-white text-center mb-20">
              Log and start to earn money with Go Cheeta
            </h1>
            <div className="flex h-full">
              <div className="m-auto">
                <form className="bg-white p-8 rounded-lg shadow-lg shadow-gray-400 ">
                  <h1 className="text-2xl DF text-center font-bold mb-6 text-blue-700">
                    Driver Sign in
                  </h1>

                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Username
                    </span>
                    <input
                      type="username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                      placeholder="example"
                    />
                  </label>
                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Vehicle Type
                    </span>
                    <select className="mt-1 px-1 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
                      <option className="text-slate-700">Select type</option>
                    </select>
                  </label>

                  <div className="flex justify-center">
                    <button
                      disabled={!pulse}
                      className={`px-4 py-2 mt-4 rounded-md DF border  ${
                        pulse
                          ? "bg-sky-500 text-white animate-pulse"
                          : "border-sky-500 text-sky-500"
                      }`}
                    >
                      Sign in
                    </button>
                  </div>
                  {/* <Link to="/"> */}
                  <h1 className="text-center text-sm DF mt-4 text-gray-500">
                    Don't you have an account...? Please contact an Admin.
                  </h1>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen justify-center items-center flex-col">
          <div className="m-auto">
            <img
              className="md:h-96 h-56 ml-10 md:ml-0 md:-mb-10"
              src={Cab}
              alt="Loading..."
            />
          </div>
          <h1 className="text-center DF text-lg md:text-2xl text-sky-700 font-bold -mt-20">
            Let's confirm bookings and start earn with Go Cheeta...!
          </h1>
          <div className="flex justify-center items-center flex-col mt-4">
            <h1 className="w-72 md:w-96 text-center text-xl DF font-bold text-sky-400">
              Go Cheeta is the fastest cab service in Sri Lanka. Why are you
              waiting..?
            </h1>

            <h1 className="w-72 md:w-96 text-center text-2xl DF font-bold text-sky-400 mt-4">
              Safe ride...!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverLoginView;
