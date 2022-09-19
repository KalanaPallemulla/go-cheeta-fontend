import axios from "axios";
import { Login, MainPath } from "./api";

export const loginByEmail = async (email, password) => {
  try {
    const res = await axios.get(
      MainPath + Login + "/" + email + "/" + password
    );
    return res;
  } catch (error) {
    if (error.response.status === 500) {
      alert("No user for this email");
      return;
    }
    console.log(error);
  }
};

export const userRegister = async (data) => {
  try {
    const res = await axios.post(MainPath + Login, data);
    return res;
  } catch (error) {
    if (error.response.status === 500) {
      alert("Email already exists");
      return;
    }
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const res = await axios.get(MainPath + Login + "/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
