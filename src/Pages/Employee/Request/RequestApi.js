import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const submitRequest = async (formData) => {
  try {
    const response = await axios.post(
      `${httpRequest + "/requests/"}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      console.log("Success");
      return response.data;
    } else {
      throw new Error("Failed to submit request");
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${httpRequest}/category`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Categories." + error.message);
  }
};
