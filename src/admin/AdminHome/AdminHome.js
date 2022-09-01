import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Container from "../components/Container";

const AdminHome = () => {
  return (
    <>
      <Container>
        <div className="flex flex-row space-x-12 h-full justify-center">
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
