import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchOrganizations = async () => {
  try {
    const response = await axios.get(
      `${httpRequest}/organization/currentMonthOrg`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
    const response = await axios.get(`${httpRequest}/users/adminsCount`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch admins.");
  }
};

export const fetchPendingComplaints = async () => {
  try {
    const response = await axios.get(`${httpRequest}/complaints/pending`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch pending complaints.");
  }
};

export const fetchResolvedComplaints = async () => {
  try {
    const response = await axios.get(`${httpRequest}/complaints/resolved`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch resolved complaints.");
  }
};

export const fetchAdminsByMonth = async () => {
  try {
    const response = await axios.get(`${httpRequest}/users/adminsByMonth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch admins by month.");
  }
};

export const fetchOrgByMonth = async () => {
  try {
    const response = await axios.get(`${httpRequest}/organization/orgByMonth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Organizations by month.");
  }
};
