import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchRequestData = async () => {
    try {
      const response = await axios.get(`${httpRequest}/requests/employeesRequests`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch Requests." + error.message);
    }
  };
  