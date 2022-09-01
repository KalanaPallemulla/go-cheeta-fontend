import React from "react";

const BookingCard = ({ status }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-8 shadow-lg bg-yellow-50">
      <div className="font-semibold text-slate-700 text-xl">
        Booking details to Kandy
      </div>
      <h1 className="mt-2 text-md DF text-gray-600">
        From: <span className="text-blue-600">Colombo</span>
      </h1>
      <h1 className="mt-1 text-md DF text-gray-600">
        From: <span className="text-blue-600">Kandy</span>
      </h1>
      <div
        className={`mt-2 ${
          status === "pending"
            ? "bg-green-600"
            : status === "accept"
            ? "bg-orange-600"
            : "bg-red-600"
        } w-fit py-1 px-2 rounded-full text-white text-sm font-bold`}
      >
        {status === "pending"
          ? "Pending"
          : status === "accept"
          ? "Confirm"
          : "Completed"}
      </div>
    </div>
  );
};

export default BookingCard;
