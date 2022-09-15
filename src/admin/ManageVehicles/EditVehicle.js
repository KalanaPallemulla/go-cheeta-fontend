import { Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getAllBranches } from "../Actions/branch";
import Container from "../components/Container";
import { getAllCategories } from "../Actions/category";
import { getAllDrivers } from "../Actions/drivers";
import { useParams } from "react-router-dom";
import { getVehicleById, updateVehicle } from "../Actions/vehicles";

const EditVehicle = () => {
  const param = useParams();
  console.log("param", param);
  const [pulse] = useState(true);
  const [branches, setBranches] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectDriver, setSelectDriver] = useState("");
  const [vehicle, setVehicle] = useState({
    name: "",
    catId: "",
    seats: "",
    branch_id: "",
  });
  const { name, catId, seats, branch_id } = vehicle;

  const getVehicle = async () => {
    const res = await getVehicleById(param.id);
    const { data } = res;
    console.log(data);
    setVehicle({
      name: data.name,
      catId: data.catId,
      seats: data.seats,
      branch_id: data.branch_id,
    });
    setDrivers([...data.driver_ids]);
  };
  const getBranches = async () => {
    const res = await getAllBranches();
    setBranches(res.data);
  };
  const getCategories = async () => {
    const res = await getAllCategories();
    setCategories(res.data);
  };
  const allDriversFromDb = async () => {
    const res = await getAllDrivers();
    setAllDrivers(res.data);
  };
  useEffect(() => {
    getVehicle();

    getBranches();
    getCategories();
    allDriversFromDb();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };
  const handleDrivers = (e) => {
    e.preventDefault();
    if (selectDriver) {
      setDrivers([...drivers, selectDriver]);
      setSelectDriver("");
    }
  };
  console.log(drivers);
  // console.log("select", selectDriver);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      ...vehicle,
      driver_ids: drivers,
    };
    console.log(data);
    const res = await updateVehicle(param.id, data);
    console.log(res);
  };

  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        Add Vehicle
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
              Category
            </span>
            <select
              name="catId"
              onChange={handleChange}
              value={catId}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
            >
              <option>Select Category</option>
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Number of seats
            </span>
            <input
              type="number"
              name="seats"
              value={seats}
              onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
              placeholder="4"
            />
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
              Branch
            </span>
            <select
              name="branch_id"
              value={branch_id}
              onChange={handleChange}
              className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
            >
              <option>Select branch</option>
              {branches.map((branch) => (
                <option value={branch.id}>{branch.name}</option>
              ))}
            </select>
          </label>
          <div>
            <label className="block mt-4 ">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
                Driver
              </span>
              <div className="flex">
                <select
                  // name="branch_id"
                  value={selectDriver}
                  onChange={(e) => setSelectDriver(e.target.value)}
                  className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
                >
                  <option>Select Driver</option>
                  {allDrivers.map((driver) => (
                    <option value={driver.id}>{driver.name}</option>
                  ))}
                </select>
                <button
                  onClick={handleDrivers}
                  className={`px-4 py-2 mt-4 rounded-md DF border  border-sky-500 text-sky-500
                  }`}
                >
                  Add driver to vehicle
                </button>
              </div>
            </label>
          </div>
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

export default EditVehicle;
