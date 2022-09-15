import { Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { deleteDriver, getAllDrivers } from "../Actions/drivers";
import { getBranchById } from "../Actions/branch";
import { Link } from "react-router-dom";

const ManageDriversAllView = () => {
  const [pulse, setPulse] = useState(true);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // getData();

    getData();
  }, []);
  const getData = async () => {
    let driversWithBranch = [];
    const res = await getAllDrivers();
    const { data } = res;
    console.log("data", data);
    for (let i = 0; i < data.length; i++) {
      let branch = await getBranchById(data[i].branch_id);
      console.log("branch.data.name", branch.data.name);
      data[i].branch = branch.data.name;
      driversWithBranch.push(data[i]);
    }

    console.log("driversWithBranch", driversWithBranch);
    setDrivers(driversWithBranch);
  };

  const handleDelete = async (id) => {
    const res = await deleteDriver(id);
    if (res.status === 200) {
      getData();
    }
  };

  console.log("drivers", drivers);

  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        All drivers
      </div>
      <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
          Branch
        </span>
        <select className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
          <option>All branches</option>
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
                Contact no
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Branch
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
          {drivers.map((driver, index) => (
            <tbody key={index} className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {driver.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {driver.contactNo}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {driver.username}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {driver.branch && driver.branch}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    className="text-green-500 hover:text-green-700"
                    to={`/manage-driver-edit/${driver.id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(driver.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default ManageDriversAllView;
