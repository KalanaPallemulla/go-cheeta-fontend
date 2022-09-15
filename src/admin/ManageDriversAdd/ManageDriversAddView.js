import { Input, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { addDriver, assignDriverToBranch } from "../Actions/drivers";
import Container from "../components/Container";

const ManageDriversAddView = () => {
  const [pulse] = useState(true);
  const [driver, setDriver] = useState({
    name: "",
    contactNo: "",
    username: "",
    branch_id: "",
  });

  const { name, contactNo, username, branch_id } = driver;

  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  // console.log(branch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driverRes = await addDriver(driver);
    console.log(driverRes);
    // const assignToBranch = await assignDriverToBranch(
    //   branch,
    //   driverRes.data.id
    // );
    // console.log(driver);
  };
  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        Add driver
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Name
            </span>
            <input
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
              placeholder="example@mail.com"
            />
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Contact no
            </span>
            <input
              type="contactNo"
              name="contactNo"
              value={contactNo}
              onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
              placeholder="example@mail.com"
            />
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Username
            </span>
            <input
              type="username"
              name="username"
              value={username}
              onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
              placeholder="example@mail.com"
            />
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Branch
            </span>
            <select
              value={branch_id}
              name="branch_id"
              onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
            >
              <option>Select branch</option>
              <option value={1}>Kandy</option>
              <option value={2}>Colombo</option>
              <option value={3}>Galle</option>
            </select>
          </label>
          <button
            disabled={!pulse}
            className={`px-4 py-2 mt-4 rounded-md DF border  ${
              pulse
                ? "bg-sky-500 text-white animate-pulse"
                : "border-sky-500 text-sky-500"
            }`}
          >
            Add
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ManageDriversAddView;
