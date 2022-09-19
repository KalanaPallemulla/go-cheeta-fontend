import { Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDriverById, updateDriver } from "../Actions/drivers";

const ManageDriversEditView = () => {
  const location = useParams();
  const navigate = useNavigate();

  const [pulse] = useState(true);

  const [driver, setDriver] = useState({
    name: "",
    contactNo: "",
    username: "",
    branch_id: "",
  });

  const { name, contactNo, username, branch_id } = driver;

  useEffect(() => {
    console.log(location);
    const getDriver = async () => {
      const { data } = await getDriverById(location.id);
      setDriver({
        name: data.name,
        contactNo: data.contactNo,
        username: data.username,
        branch_id: data.branch_id,
      });
    };
    getDriver();
  }, []);

  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driverRes = await updateDriver(location.id, driver);
    console.log(driverRes);
    if (driverRes.data) {
      navigate("/manage-drivers");
    }
    // const assignToBranch = await assignDriverToBranch(
    //   branch,
    //   driverRes.data.id
    // );
    // console.log(driver);
  };
  console.log(driver);
  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        Edit driver
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
          {/* <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Username
            </span>
            <input
              type="username"
              name="username"
              // value={username}
              // onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
              placeholder="example@mail.com"
            />
          </label> */}
          {/* <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Username
            </span>
            <select className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
              <option>Select branch</option>
            </select>
          </label> */}
          <button
            disabled={!pulse}
            className={`px-4 py-2 mt-4 rounded-md DF border  ${
              pulse
                ? "bg-sky-500 text-white animate-pulse"
                : "border-sky-500 text-sky-500"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ManageDriversEditView;
