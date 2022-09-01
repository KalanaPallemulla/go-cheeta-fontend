import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cab from "../../assets/cab.gif";
import Hi from "../../assets/hi.gif";
import Navbar from "../components/Navbar";
import { ReactSmartScroller } from "react-smart-scroller";
import BookingCard from "./BookingCard";
import { Element } from "react-scroll";

const BookingView = () => {
  const [pulse, setPulse] = useState(false);

  return (
    <>
      <Navbar />
      <div className="md:grid md:grid-cols-2">
        <div className="flex h-screen bg-blue-700 w-full justify-center px">
          <div className="m-auto">
            <div className="mb-2 flex flex-row items-center justify-center">
              <h1 className="TF md:text-5xl text-3xl font-bold text-white text-center">
                Go Cheeta
              </h1>
              <img className="h-16" src={Hi} alt="Loading..." />
            </div>

            <h1 className="TF md:text-md lg:text-md text-sm font-bold text-white text-center mb-20">
              Provide your details and confirm booking
            </h1>
            <div className="flex h-full">
              <div className="m-auto">
                <form className="bg-white p-8 rounded-lg shadow-lg shadow-gray-400 ">
                  <h1 className="text-2xl DF text-center font-bold mb-6 text-blue-700">
                    Create a booking
                  </h1>

                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Branch
                    </span>
                    <select className="mt-1 px-1 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
                      <option>Branch</option>
                    </select>
                  </label>

                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Pick location
                    </span>
                    <select className="mt-1 px-1 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
                      <option>Location</option>
                    </select>
                  </label>
                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Drop location
                    </span>
                    <select className="mt-1 px-1 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
                      <option>Location</option>
                    </select>
                  </label>
                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Vehicle Type
                    </span>
                    <select className="mt-1 px-1 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
                      <option>Select type</option>
                    </select>
                  </label>

                  <div className="flex justify-center">
                    <button
                      className={`px-4 py-2 mt-4 rounded-md DF border  ${
                        pulse
                          ? "bg-sky-500 text-white animate-pulse"
                          : "border-sky-500 text-sky-500"
                      }`}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-8 md:py-8">
          <div className="m-auto">
            <ReactSmartScroller vertical={true}>
              <div className="p-2">
                <BookingCard status="pending" />
              </div>

              <div className="p-2">
                <BookingCard status="accept" />
              </div>
              <div className="p-2">
                <BookingCard />
              </div>
              {/* <div className="p-2">
                <BookingCard />
              </div>
              <div className="p-2">
                <BookingCard />
              </div>
              <div className="p-2">
                <BookingCard status="pending" />
              </div>

              <div className="p-2">
                <BookingCard status="accept" />
              </div>
              <div className="p-2">
                <BookingCard />
              </div>
              <div className="p-2">
                <BookingCard />
              </div>
              <div className="p-2">
                <BookingCard />
              </div> */}
            </ReactSmartScroller>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingView;

const renderImages = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2019/06/02/00/46/chapel-4245437__340.jpg",
    "https://cdn.pixabay.com/photo/2017/08/22/22/36/cinque-terre-2670762__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/01/20/34/girl-1562091__340.jpg",
    "https://cdn.pixabay.com/photo/2013/09/26/23/23/glitter-powder-186829__340.jpg",
    "https://cdn.pixabay.com/photo/2019/04/11/09/50/wave-4119274__340.jpg",
  ];

  return images.map((image, index) => (
    <img
      alt=""
      key={index}
      src={image}
      style={{
        width: "100%",
        height: 300,
        objectFit: "cover",
      }}
    />
  ));
};
