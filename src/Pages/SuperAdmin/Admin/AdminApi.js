import axios from "axios";
import {
  httpRequest,
  fetchOrganizationsList,
  fetchAdminsData,
} from "../../../Utils/httpRequestsStrings";

export const fetchAdmins = async () => {
  try {
    const response = await axios.get(`${httpRequest + fetchAdminsData}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch admins data.");
  }
};

export const fetchOrganizations = async () => {
  try {
    const response = await axios.get(
      `${httpRequest + fetchOrganizationsList}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch organizations list.");
  }
};

export const editAdmin = async ({ id, formData }) => {
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
    throw new Error("Failed to update Admin" + error.message);
  }
};

export const deleteAdmin = async (id) => {
  try {
    const response = await axios.delete(`${httpRequest}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete Admin." + error.message);
  }
};
