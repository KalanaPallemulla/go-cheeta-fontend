import { Input, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import Container from "../components/Container";

const AllBranches = () => {
  const [pulse] = useState(true);
  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        All branches
      </div>
      {/* <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-700 font-bold DF">
          Branch
        </span>
        <select className="mt-1 px-3 py-2 md:w-96 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 DF font-bold">
          <option>All branches</option>
        </select>
      </label> */}
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
                Email
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
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                Jone Doe
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                jonne62@gmail.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                Kandy
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a className="text-green-500 hover:text-green-700" href="#">
                  Edit
                </a>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a className="text-red-500 hover:text-red-700" href="#">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllBranches;
