import axios from "axios";
import { AllBookings, Booking, MainPath } from "./api";

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
