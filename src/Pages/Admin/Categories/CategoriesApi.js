import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const addCategory = async (formData) => {
  try {
    const response = await axios.post(
      `${httpRequest + "/category/"}`,
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
    throw new Error("Failed to add category" + error.message);
  }
};
