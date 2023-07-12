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
