import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchRequestApprovedData = async () => {
  try {
    const response = await axios.get(`${httpRequest}/requests/returns`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data." + error.message);
  }
};

export const fetchReturnUserInfo = async (id) => {
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