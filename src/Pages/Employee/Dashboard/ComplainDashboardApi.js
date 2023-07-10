import axios from "axios";
import { httpRequest } from "../../../Utils/httpRequestsStrings";

export const updateUserProfile = async ({ id, formData }) => {
  try {
    console.log("ID=> " + JSON.stringify(id));
    const response = await axios.patch(
      `${httpRequest + "/users/" + id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log("SUCCESS" + JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    throw new Error("Failed to Update user's data." + error.message);
  }
};

export const fetchUserData = async () => {
  try {
    const id = localStorage.getItem("userId");
    const response = await axios.get(
      `${httpRequest + "/users/"+id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch User Data ");
  }
};
