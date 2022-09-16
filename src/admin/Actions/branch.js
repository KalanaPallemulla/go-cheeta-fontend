import axios from "axios";
import { AllBranches, Booking, Branch, MainPath } from "./api";

export const getBranchById = async (id) => {
  try {
    let response = await axios.get(MainPath + Branch + "/" + id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBranches = async () => {
  try {
    let response = await axios.get(MainPath + AllBranches);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const branchBooking = async (branch, booking) => {
  try {
    let response = await axios.put(
      MainPath + Branch + "/" + branch + "/" + Booking + "/" + booking
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
