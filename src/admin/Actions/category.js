import axios from "axios";
import { VehicleCategories, MainPath, vehicleCategory } from "./api";

export const getAllCategories = async () => {
  try {
    let response = await axios.get(MainPath + VehicleCategories);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (data) => {
  try {
    let response = await axios.post(MainPath + vehicleCategory, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    let response = await axios.get(MainPath + vehicleCategory + "/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (id, data) => {
  console.log(data);
  try {
    let response = await axios.put(MainPath + vehicleCategory + "/" + id, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
