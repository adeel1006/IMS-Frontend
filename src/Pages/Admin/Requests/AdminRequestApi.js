import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchRequestData = async () => {
  try {
    const response = await axios.get(
      `${httpRequest}/requests/employeesRequests`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Requests." + error.message);
  }
};

export const fetchRequest = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/requests/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch request." + error.message);
  }
};

export const updateRequestStatus = async (requestData) => {
  try {
    const status = await requestData.status;
    console.log(status);
    const response = await axios.patch(
      `${httpRequest}/requests/${requestData.id}`,
      {
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update request's status." + error.message);
  }
};
