import React from "react";

const BookingCard = ({ status, booking }) => {
  console.log(booking);
  return (
    <div className="border border-gray-300 rounded-xl p-8 shadow-lg bg-yellow-50">
      <div className="font-semibold text-slate-700 text-xl">
        Booking details to {booking.dropLocation}
      </div>

      <h1 className="mt-2 text-md DF text-gray-600">
        From: <span className="text-blue-600">{booking.pickLocation}</span>
      </h1>
      <h1 className="mt-1 text-md DF text-gray-600">
        To: <span className="text-blue-600">{booking.dropLocation}</span>
      </h1>
      <h1 className="mt-1 text-md DF text-gray-600">
        Fee: <span className="text-blue-600">{booking.cost}</span>
      </h1>
      <div
        className={`mt-2 ${
          booking.status === "Pending"
            ? "bg-green-600"
            : booking.status === "Confirm"
            ? "bg-orange-600"
            : "bg-red-600"
        } w-fit py-1 px-2 rounded-full text-white text-sm font-bold`}
      >
        {booking.status === "Pending"
          ? "Pending"
          : booking.status === "Confirm"
          ? "Confirm"
          : "Completed"}
      </div>
    </div>
  );
};

export default BookingCard;
