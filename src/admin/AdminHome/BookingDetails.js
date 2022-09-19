import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { getBookingById } from "../Actions/booking";
import { getUserById } from "../Actions/user";
import { getDriverById } from "../Actions/drivers";
import { getVehicleById } from "../Actions/vehicles";
import { getCategoryById } from "../Actions/category";

const BookingDetails = () => {
  const param = useParams();
  const [booking, setBooking] = useState({});

  const [user, setUser] = useState({});
  const [driver, setDriver] = useState({});
  const [vehicle, setVehicle] = useState({});
  const getBooking = async () => {
    const res = await getBookingById(param.id);
    setBooking(res.data);
    console.log(res);
  };
  useEffect(() => {
    getBooking();
  }, []);
  const getUser = async (id) => {
    const res = await getUserById(id);
    setUser(res.data);
  };
  const getDriver = async (id) => {
    const res = await getDriverById(id);
    console.log(res);
    setDriver(res.data);
  };
  const getVehicle = async (id) => {
    const { data } = await getVehicleById(id);
    setVehicle(data);
  };

  useEffect(() => {
    if (booking.id) {
      getUser(booking.user_id);
      getDriver(booking.driver_id);
      getVehicle(booking.vehicle_id);
    }
  }, [booking]);
  return (
    <Container>
      <div>
        <div>
          <h1 className="DF text-lg font-bold text-blue-600">
            User information
          </h1>
          <div className="mt-2">
            <h1 className="font-serif text-gray-600 font-md">
              Name: <span className="text-black ml-2 text-lg">{user.name}</span>{" "}
            </h1>
            <h1 className="font-serif text-gray-600 font-md">
              Email:{" "}
              <span className="text-black ml-2 text-lg">{user.email}</span>
            </h1>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="DF text-lg font-bold text-blue-600">
            Driver information
          </h1>
          <div className="mt-2">
            <h1 className="font-serif text-gray-600 font-md">
              Name:{" "}
              <span className="text-black ml-2 text-lg">{driver.name}</span>
            </h1>
            <h1 className="font-serif text-gray-600 font-md">
              Contact No:{" "}
              <span className="text-black ml-2 text-lg">
                {driver.contactNo}
              </span>
            </h1>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="DF text-lg font-bold text-blue-600">
            Vehicle information
          </h1>
          <div className="mt-2">
            <h1 className="font-serif text-gray-600 font-md">
              Name:{" "}
              <span className="text-black ml-2 text-lg">{vehicle.name}</span>
            </h1>

            <h1 className="font-serif text-gray-600 font-md">
              Seats:{" "}
              <span className="text-black ml-2 text-lg">{vehicle.seats}</span>
            </h1>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="DF text-lg font-bold text-blue-600">
            Booking information
          </h1>
          <div className="mt-2">
            <h1 className="font-serif text-gray-600 font-md">
              From:
              <span className="text-black ml-2 text-lg">
                {" "}
                {booking && booking.pickLocation}
              </span>
            </h1>
            <h1 className="font-serif text-gray-600 font-md">
              To:{" "}
              <span className="text-black ml-2 text-lg">
                {booking && booking.dropLocation}
              </span>
            </h1>
            <h1 className="font-serif text-gray-600 font-md">
              Address:
              <span className="text-black ml-2 text-lg">
                {" "}
                {booking && booking.address}
              </span>
            </h1>
            <h1 className="font-serif text-gray-600 font-md">
              Cost:{" "}
              <span className="text-black ml-2 text-lg">
                {booking && booking.cost}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookingDetails;
