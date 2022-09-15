import axios from "axios";
import { AllBranches, Branch, MainPath } from "./api";

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
