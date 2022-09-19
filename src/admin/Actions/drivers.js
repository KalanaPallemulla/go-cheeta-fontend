import { AllDrivers, Branch, Driver, MainPath } from "./api";
import axios from "axios";
import { DriverLogin } from "./api";

export const getAllDrivers = async () => {
  let drivers;
  try {
    drivers = await axios.get(MainPath + AllDrivers);
    return drivers;
  } catch (error) {
    console.log(error);
  }
};

export const addDriver = async (driverData) => {
  let driver;
  try {
    driver = await axios.post(MainPath + Driver, driverData);
    console.log(driver);
    return driver;
  } catch (error) {
    console.log(error);
  }
};

export const assignDriverToBranch = async (branchId, driverId) => {
  let response;
  try {
    response = await axios.put(
      MainPath + Branch + "/" + branchId + "/" + Driver + "/" + driverId
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDriver = async (id) => {
  try {
    const res = await axios.delete(MainPath + Driver + "/" + id);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getDriverById = async (id) => {
  try {
    const res = await axios.get(MainPath + Driver + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateDriver = async (id, data) => {
  try {
    const res = await axios.put(MainPath + Driver + "/" + id, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const driverLogin = async (username) => {
  console.log("User====>", username);
  try {
    const res = await axios.get(MainPath + DriverLogin + "/" + username);
    return res;
  } catch (error) {
    console.log("error ===>", error.response.status);
    if (error.response.status == 400 || error.response.status == 500) {
      alert("Please make sure that you registered as a driver");
    }
  }
};
