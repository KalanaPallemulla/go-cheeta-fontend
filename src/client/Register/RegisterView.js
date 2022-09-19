import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../admin/Actions/user";
import Cab from "../../assets/cab.gif";
import Hi from "../../assets/hi.gif";
import Navbar from "../components/Navbar";

const RegisterView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contactNo: "",
  });

  const { name, email, password, contactNo } = user;
  const [confirmPassword, setConfirmPassword] = useState("");

  const [pulse, setPulse] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      if (name && email && password) {
        const res = await userRegister(user);
        if (res.data) {
          window.localStorage.setItem("user", res.data.id);
          navigate("/booking");
        }
      } else {
        alert("All fields needs to fill");
        return;
      }
    }
  };

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password.length >= 8 &&
      confirmPassword === password
    ) {
      setPulse(true);
    } else {
      setPulse(false);
    }
  }, [name, email, password, confirmPassword]);

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
              Join with fastest cab service in Sri Lanka
            </h1>
            <div className="flex h-full">
              <div className="m-auto">
                <form
                  className="bg-white p-8 rounded-lg shadow-lg shadow-gray-400 "
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-2xl DF text-center font-bold mb-6 text-blue-700">
                    Sign up
                  </h1>
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Name
                    </span>
                    <input
                      type="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                      placeholder="John Doe"
                    />
                  </label>
                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                      placeholder="example@mail.com"
                    />
                  </label>
                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Contact No
                    </span>
                    <input
                      type="contactNo"
                      name="contactNo"
                      value={contactNo}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                      placeholder="0000000"
                    />
                  </label>

                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                      placeholder="Password"
                    />
                  </label>
                  <label className="block mt-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                      Confirm Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                      placeholder="Confirm Password"
                    />
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
                      Sign up
                    </button>
                  </div>

                  <Link to="/login">
                    <h1 className="text-center text-sm DF mt-4 text-gray-500">
                      Do you have an account...?
                    </h1>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen justify-center items-center">
          <div className="m-auto">
            <img
              className="md:h-96 h-56 ml-10 md:ml-0"
              src={Cab}
              alt="Loading..."
            />
            <h1 className="text-center DF text-lg md:text-2xl text-sky-700 font-bold">
              Let's book a cab with Go Cheeta...!
            </h1>
            <div className="flex justify-center items-center flex-col mt-4">
              <h1 className="w-72 md:w-96 text-center text-xl DF font-bold text-sky-400">
                Go Cheeta is the fastest cab service in Sri Lanka. No need to
                wait, create an account and book a cab now...
              </h1>

              <h1 className="w-72 md:w-96 text-center text-2xl DF font-bold text-sky-400 mt-4">
                Happy ride...!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterView;
