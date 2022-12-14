import axios from "axios";
import {
  FreeVehicle,
  MainPath,
  ReserveVehicle,
  vehicle,
  vehicleCategory,
  vehicles,
} from "./api";

export const getAllVehicles = async () => {
  try {
    const res = await axios.get(MainPath + vehicles);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVehicleCategoryById = async (id) => {
  try {
    const res = await axios.get(MainPath + vehicleCategory + "/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteVehicle = async (id) => {
  try {
    const res = await axios.delete(MainPath + vehicle + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const addVehicleToStore = async (data) => {
  try {
    const res = await axios.post(MainPath + vehicle, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getVehicleById = async (id) => {
  try {
    const res = await axios.get(MainPath + vehicle + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateVehicle = async (id, data) => {
  try {
    const res = await axios.put(MainPath + vehicle + "/" + id, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const reserveVehicle = async (id) => {
  try {
    const res = await axios.put(MainPath + ReserveVehicle + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const freeVehicle = async (id) => {
  try {
    const res = await axios.put(MainPath + FreeVehicle + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
