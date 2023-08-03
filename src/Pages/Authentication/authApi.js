import axios from "axios";
import { httpRequest } from "../../Utils/httpRequestsStrings";

export const resetPassword = async ({ email, newPassword, otp }) => {
  try {
    const response = await axios.post(
      `${httpRequest + "/auth/resetPassword"}`,
      {
        email: email,
        newPassword: newPassword,
        otp: otp,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to Update data." + error.message);
  }
};
