import { Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../Actions/category";
import Container from "../components/Container";

const AllCategories = () => {
  const [pulse] = useState(true);
  const [categories, setCategories] = useState([]);

  const allCategories = async () => {
    const { data } = await getAllCategories();
    setCategories(data);
  };
  useEffect(() => {
    allCategories();
  }, []);
  return (
    <Container>
      <div className="py-4 bg-slate-800 h-full text-2xl font-bold text-white px-4">
        All Categories
      </div>

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
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((cat, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {cat.name}
                </td>

                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    className="text-green-500 hover:text-green-700"
                    to={`/manage-category-edit/${cat.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllCategories;
