import React from "react";

const AdminNavbar = () => {
  return (
    <div>
      <div className="w-60 fixed left-0 h-screen top-20 shadow-md">
        <div className="flex justify-center pt-8 flex-col items-center space-y-4">
          <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center ">
            Branch Reports
          </div>
          <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center">
            Manage Drivers
          </div>
          <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center">
            Manage Vehicles
          </div>
          <div className="bg-slate-800 shadow-yellow-900 w-48 py-4 font-bold text-white text-xl rounded-2xl shadow-md text-center">
            Manage Branch
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
