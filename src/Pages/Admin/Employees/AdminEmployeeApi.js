import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const addNewEmployee = async (formData) => {
  try {
    const response = await axios.post(
      `${httpRequest}/users/createUser`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to Add a new employee." + error.message);
  }
};

export const fetchEmployeesList = async () => {
  try {
    const response = await axios.get(`${httpRequest}/users/allEmployees`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Employees." + error.message);
  }
};

export const fetchEmployeeDetail = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employee detail." + error.message);
  }
};

export const fetchEmployeeRequest = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/requests/employee/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employee detail." + error.message);
  }
};

export const editEmp = async ({ id, formData }) => {
  try {
    const response = await axios.patch(
      `${httpRequest + "/users/" + id}`,
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
    throw new Error("Failed to update Employee" + error.message);
  }
};

export const deleteEmp = async (id) => {
  try {
    const response = await axios.delete(`${httpRequest}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete Employee." + error.message);
  }
};
