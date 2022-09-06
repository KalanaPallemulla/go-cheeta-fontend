import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <div className="w-60 fixed left-0 h-screen top-20 shadow-md">
        <div className="flex justify-center pt-8 flex-col items-center space-y-4">
          <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center cursor-pointer ">
            Branch Reports
          </div>
          <Popover placement="bottom">
            <PopoverHandler>
              <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center cursor-pointer">
                Manage Drivers
              </div>
            </PopoverHandler>
            <PopoverContent>
              <div className="space-y-2 p-2">
                <Link to="/manage-drivers">
                  <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                    All drivers
                  </div>
                </Link>
                <Link to="/manage-driver-add">
                  <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                    Add new driver
                  </div>
                </Link>
              </div>
            </PopoverContent>
          </Popover>

          <Popover placement="bottom">
            <PopoverHandler>
              <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center cursor-pointer">
                Manage Vehicles
              </div>
            </PopoverHandler>
            <PopoverContent>
              <div className="space-y-4 p-2">
                <Link to="/manage-vehicles">
                  <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                    All vehicles
                  </div>
                </Link>
                <Link to="/manage-vehicle-add">
                  <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                    Add new Vehicle
                  </div>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom">
            <PopoverHandler>
              <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center cursor-pointer">
                Manage Branches
              </div>
            </PopoverHandler>
            <PopoverContent>
              <div className="space-y-2 p-2">
                <Link to="/manage-branches">
                  <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                    All branches
                  </div>
                </Link>
                <Link to="/manage-branch-add">
                  <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                    Add new branch
                  </div>
                </Link>

                {/* <div className="px-4 py-2 border border-gray-300 text-lg font-serif rounded-md cursor-pointer hover:bg-gray-300 hover:text-white">
                  Edit branch
                </div> */}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
