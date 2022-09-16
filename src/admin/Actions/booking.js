import axios from "axios";
import {
  AllBookings,
  Booking,
  BookingFinish,
  BookingVehicle,
  MainPath,
} from "./api";

export const createBooking = async (data) => {
  try {
    const res = await axios.post(MainPath + Booking, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBookings = async () => {
  try {
    const res = await axios.get(MainPath + AllBookings);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getBookingById = async (id) => {
  try {
    const res = await axios.get(MainPath + Booking + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const acceptBooking = async (id, data) => {
  try {
    const res = await axios.put(MainPath + Booking + "/" + id, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const finishBooking = async (id) => {
  try {
    const res = await axios.put(MainPath + BookingFinish + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const addVehicleToBooking = async (id, data) => {
  try {
    const res = await axios.put(MainPath + BookingVehicle + "/" + id, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
