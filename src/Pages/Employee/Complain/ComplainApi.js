import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const submitComplaint = async (formData) => {
  try {
    const response = await axios.post(
      `${httpRequest + "/complaints/"}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to submit complaint");
    }
  } catch (error) {
    throw new Error("Failed to submit complaint" + error.message);
  }
};

export const fetchUserComplaints = async () => {
  try {
    const response = await axios.get(
      `${httpRequest}/complaints/userComplaints`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Requests of a User." + error.message);
  }
};

export const fetchUserComplaintDetail = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/complaints/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch complaint of a User." + error.message);
  }
};
