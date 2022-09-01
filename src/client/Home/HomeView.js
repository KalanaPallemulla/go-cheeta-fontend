import React from "react";
import { Link } from "react-router-dom";
import HomeBackground from "../../assets/homebackground3.gif";
import Navbar from "../components/Navbar";
const HomeView = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen px-12">
        <div className="h-1/6 flex">
          <div className="m-auto">
            <h1 className="font-semibold text-3xl text-slate-600 text-center">
              Welcome to <span className="text-blue-600">Go Cheeta</span>
            </h1>
            <h1 className="DF text-lg text-slate-600 text-center">
              Choose your option as user or driver
            </h1>
          </div>
        </div>
        <div className="md:grid md:grid-cols-9 h-5/6">
          <div className="md:col-span-4 flex h-full">
            <div className="m-auto w-96 break-words text-center">
              <h1 className="text-5xl text-slate-600  font-semibold">
                Create a booking yourself
              </h1>
              <h1 className="mt-4 text-lg DF text-slate-700">
                You can make a book a ride easily with Go Cheeta. Have a safe
                ride.
              </h1>
              <Link to="/booking">
                <button className="px-6 py-2 bg-blue-400 text-white mt-4 text-md DF rounded-full">
                  Booking
                </button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 flex justify-center md:py-4 ">
            <div className="md:grid md:grid-rows-13 ">
              <div
                className="md:row-span-6 md:bg-blue-500 hidden md:block"
                style={{ width: "2px" }}
              />

              <div className="md:row-span-1 flex h-full items-center -ml-3 text-blue-500 italic font-serif text-xl font-medium">
                OR
              </div>
              <div
                className="md:row-span-6 md:bg-blue-500 hidden md:block"
                style={{ width: "2px" }}
              />
            </div>
          </div>
          <div className="md:col-span-4 flex h-full">
            <div className="m-auto w-96 break-words text-center">
              <h1 className="text-5xl text-slate-600  font-semibold">
                Create happy rides by yourself
              </h1>
              <h1 className="mt-4 text-lg DF text-slate-700">
                Make your day as the best driver in Go Cheeta. Have a safe ride.
              </h1>
              <Link to="/driver">
                <button className="px-6 py-2 bg-blue-400 text-white mt-4 text-md DF rounded-full">
                  Driver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
