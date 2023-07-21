import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const addVendor = async (formData) => {
  try {
    const response = await axios.post(`${httpRequest + "/vendor/"}`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add vendor" + error.message);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${httpRequest}/category`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Categories." + error.message);
  }
};

export const fetchVendorsList = async () => {
  try {
    const response = await axios.get(`${httpRequest}/vendor`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vendors." + error.message);
  }
};

export const fetchVendor = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/vendor/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vendor." + error.message);
  }
};
