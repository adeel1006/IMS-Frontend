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
    let accessToken = localStorage.getItem("accessToken");
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
