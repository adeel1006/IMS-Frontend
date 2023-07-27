import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchEmployeesCount = async () => {
  try {
    const response = await axios.get(`${httpRequest}/users/employees/count`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employees count." + error.message);
  }
};

export const fetchInventoryItems = async () => {
  try {
    const response = await axios.get(
      `${httpRequest}/inventory/inventoryItems`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch inventory count." + error.message);
  }
};

export const fetchVendorCount = async () => {
  try {
    const response = await axios.get(`${httpRequest}/vendor/vendorsCount`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vendor count." + error.message);
  }
};

export const fetchCategoryCount = async () => {
  try {
    const response = await axios.get(`${httpRequest}/category/categoriesCount`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch category count." + error.message);
  }
};

export const fetchCategoryItemCount = async () => {
  try {
    const response = await axios.get(`${httpRequest}/category/inventory`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch category count." + error.message);
  }
};

export const fetchEmpComplaintCountByMonth = async () => {
  try {
    const response = await axios.get(`${httpRequest}/complaints/empComplaintCount`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch category count." + error.message);
  }
};