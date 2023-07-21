import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const addItem = async (formData) => {
  try {
    const response = await axios.post(
      `${httpRequest + "/inventory/"}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
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
    throw new Error("Failed to fetch categories." + error.message);
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

export const fetchInventory = async () => {
  try {
    const response = await axios.get(`${httpRequest}/inventory`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vendors." + error.message);
  }
};

export const fetchItem = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/inventory/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch item." + error.message);
  }
};
