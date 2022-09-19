import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllDrivers } from "../Actions/api";
import { getAllBookings } from "../Actions/booking";
import { getAllBranches, getBranchById } from "../Actions/branch";
import { getAllDrivers } from "../Actions/drivers";
import { getAllVehicles } from "../Actions/vehicles";
import AdminNavbar from "../components/AdminNavbar";
import Container from "../components/Container";
import { getUserById } from "../Actions/user";

const AdminHome = () => {
  const [allBranches, setAllBranches] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
  const [allTotalIncome, setAllTotalIncome] = useState(0);
  const [selectBranchId, setSelectBranchId] = useState();
  const [selectBranch, setSelectBranch] = useState({});

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

  const getBranchForId = async () => {
    setSelectBranch({});
    const { data } = await getBranchById(selectBranchId);
    console.log("data", data);
    let total = 0;
    data.branchBookings.map((b) => (total += b.cost));
    data.fee = total;
    data.totalBookings = data.branchBookings.length;
    const filterDriver = allDrivers.filter((d) => d.branch_id === data.id);
    data.totalDrivers = filterDriver.length;
    const filterVehicles = allVehicles.filter((v) => v.branch_id === data.id);
    data.totalVehicles = filterVehicles.length;
    data.bookings = data.branchBookings;

    setSelectBranch(data);
  };

  useEffect(() => {
    if (selectBranchId) {
      getBranchForId();
    }
  }, [selectBranchId]);

  console.log("selectBranch", selectBranch);

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
          <select
            value={selectBranchId}
            onChange={(e) => setSelectBranchId(e.target.value)}
            className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
          >
            <option>Select branch</option>
            {allBranches.map((b, index) => (
              <option key={index} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        {selectBranchId && (
          <div className="flex flex-row space-x-12 h-full justify-center mt-8">
            <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
              <h1 className="font-bold text-lg text-center">All bookings</h1>
              <h1 className="text-center text-lg font-bold">
                {selectBranch && selectBranch.totalBookings}
              </h1>
            </div>
            <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
              <h1 className="font-bold text-lg text-center">Total income</h1>
              <h1 className="text-center text-lg font-bold">
                {selectBranch && selectBranch.fee}
              </h1>
            </div>
            <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
              <h1 className="font-bold text-lg text-center">All drivers</h1>
              <h1 className="text-center text-lg font-bold">
                {selectBranch && selectBranch.totalDrivers}
              </h1>
            </div>
            <div className=" flex flex-col border border-slate-800 w-48 h-28 rounded-lg justify-center">
              <h1 className="font-bold text-lg text-center">All Vehicles</h1>
              <h1 className="text-center text-lg font-bold">
                {selectBranch && selectBranch.totalVehicles}
              </h1>
            </div>
          </div>
        )}
        {selectBranchId && (
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Cost
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {selectBranch &&
                  selectBranch.bookings &&
                  selectBranch.bookings.map((b, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {b.pickLocation}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {b.dropLocation}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {b.cost}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <Link
                          className="text-green-500 hover:text-green-700"
                          to={`/booking-details/${b.id}`}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default AdminHome;
