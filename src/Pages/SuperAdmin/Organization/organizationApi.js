import axios from "axios";
import {
  fetchOrganizationsList,
  httpRequest,
} from "../../../Utils/httpRequestsStrings";

export const fetchOrg = async () => {
  let accessToken = localStorage.getItem("accessToken");
  const response = await axios.get(`${httpRequest + fetchOrganizationsList}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const deleteOrganization = async (id) => {
  try {
    const response = await axios.delete(`${httpRequest}/organization/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete organization." + error.message);
  }
};

export const editOrganization = async ({ id, formData }) => {
  try {
    const response = await axios.patch(
      `${httpRequest + "/organization/" + id}`,
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
    throw new Error("Failed to update organization" + error.message);
  }
};
