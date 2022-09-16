import React, { useEffect, useState } from "react";
import { getAllBookings } from "../Actions/booking";
import { getAllBranches } from "../Actions/branch";
import { getAllDrivers } from "../Actions/drivers";
import { getAllVehicles } from "../Actions/vehicles";
import AdminNavbar from "../components/AdminNavbar";
import Container from "../components/Container";

const AdminHome = () => {
  const [allBranches, setAllBranches] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
  const [allTotalIncome, setAllTotalIncome] = useState(0);

  const getBookings = async () => {
    const { data } = await getAllBookings();
    setAllBookings(data);
    let cost = 0;
    data.map((d) => (cost += d.cost));
    setAllTotalIncome(cost);
  };

  const getDrivers = async () => {
    const { data } = await getAllDrivers();
    setAllDrivers(data);
  };

  const getVehicles = async () => {
    const res = await getAllVehicles();
    setAllVehicles(res);
  };

  const getBranches = async () => {
    const res = await getAllBranches();
    setAllBranches(res.data);
  };
  useEffect(() => {
    getBookings();
    getDrivers();
    getVehicles();
    getBranches();
  }, []);
  return (
    <>
      <Container>
        <div className="flex flex-row space-x-12 h-full justify-center">
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All bookings</h1>
            <h1 className="text-center text-lg font-bold">
              {allBookings && allBookings.length}
            </h1>
          </div>
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">Total income</h1>
            <h1 className="text-center text-lg font-bold">{allTotalIncome}</h1>
          </div>
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All drivers</h1>
            <h1 className="text-center text-lg font-bold">
              {allDrivers && allDrivers.length}
            </h1>
          </div>
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All Vehicles</h1>
            <h1 className="text-center text-lg font-bold">
              {allVehicles && allVehicles.length}
            </h1>
          </div>
        </div>
        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
            Branch
          </span>
          <select className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
            <option>Select branch</option>
            {allBranches.map((b, index) => (
              <option key={index} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        <div className="flex flex-row space-x-12 h-full justify-center mt-8">
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All bookings</h1>
            <h1 className="text-center text-lg font-bold">100</h1>
          </div>
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All branches</h1>
            <h1 className="text-center text-lg font-bold">7</h1>
          </div>
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All drivers</h1>
            <h1 className="text-center text-lg font-bold">20</h1>
          </div>
          <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
            <h1 className="font-bold text-lg text-center">All Vehicles</h1>
            <h1 className="text-center text-lg font-bold">20</h1>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AdminHome;
