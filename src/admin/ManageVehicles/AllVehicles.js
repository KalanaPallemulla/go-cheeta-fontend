import { Input, Option, Select } from "@material-tailwind/react";
import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import {
  deleteVehicle,
  getAllVehicles,
  getVehicleCategoryById,
} from "../Actions/vehicles";
import { getAllBranches, getBranchById } from "../Actions/branch";
import { Link } from "react-router-dom";

const AllVehicles = () => {
  const [pulse] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState();
  const [branches, setBranches] = useState([]);
  const [filterVehicles, setFilterVehicles] = useState([]);

  const getVehicles = async () => {
    const res = await getAllVehicles();
    let itemsArr = [];

    for (let i = 0; i < res.length; i++) {
      const getCategory = await getVehicleCategoryById(res[i].catId);
      const getBranch = await getBranchById(res[i].branch_id);
      res[i].branch = getBranch.data.name;
      res[i].category = getCategory.name;
      itemsArr.push(res[i]);
    }
    setVehicles(itemsArr);
    setFilterVehicles(itemsArr);
  };
  useEffect(() => {
    getVehicles();
    getBranches();
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteVehicle(id);
    getVehicles();
  };

  const getBranches = async () => {
    const res = await getAllBranches();
    setBranches(res.data);
  };

  const handleFilter = useCallback(() => {
    if (filter) {
      setFilterVehicles(vehicles.filter((v) => v.branch_id == filter));
    } else {
      setFilterVehicles(vehicles);
    }
  }, [filter]);

  useEffect(() => {
    if (filter) {
      handleFilter();
    } else {
      setFilterVehicles(vehicles);
    }
  }, [filter]);

  console.log(filter);
  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        All vehicles
      </div>
      <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
          Branch
        </span>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold"
        >
          <option value={""}>All branches</option>
          {branches.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Branch
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Seats
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Edit
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filterVehicles.map((vehicle, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {vehicle.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {vehicle.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {vehicle.branch}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {vehicle.seats}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    className="text-green-500 hover:text-green-700"
                    to={`/manage-vehicle-edit/${vehicle.id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllVehicles;
