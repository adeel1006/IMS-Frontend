import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchOrganizations = async () => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      `${httpRequest}/organization/currentMonthOrg`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch organizations.");
  }
};

export const fetchAdmins = async () => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${httpRequest}/users/adminsCount`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch admins.");
  }
};

export const fetchPendingComplaints = async () => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${httpRequest}/complaints/pending`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch pending complaints.");
  }
};

export const fetchResolvedComplaints = async () => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${httpRequest}/complaints/resolved`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch resolved complaints.");
  }
};

export const fetchAdminsByMonth = async () => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${httpRequest}/users/adminsByMonth`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch admins by month.");
  }
};

export const fetchOrgByMonth = async () => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${httpRequest}/organization/orgByMonth`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Organizations by month.");
  }
};
