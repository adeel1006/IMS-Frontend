import axios from "axios";
import { complaintByID, httpRequest } from "../../../Utils/httpRequestsStrings";

export const fetchEmployeesComplaints = async () => {
  try {
    const response = await axios.get(
      `${httpRequest}/complaints/employeesComplaints`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Employees complaints." + error.message);
  }
};

export const fetchAdminComplaints = async () => {
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
    throw new Error("Failed to fetch Admin complaints." + error.message);
  }
};

export const submitAdmComplaint = async (formData) => {
  try {
    const response = await axios.post(
      `${httpRequest + "/complaints/"}`,
      { title: formData.title, description: formData.description },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Admin complaints." + error.message);
  }
};

export const fetchComplaintDetail = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/complaints/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch complaints details" + error.message);
  }
};

export const updateComplaintStatus = async ({id, status})=>{
  try {
    const response = await axios.patch(
      `${httpRequest}${complaintByID}${id}`,
      { status: status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to Resolve complaint" + error.message);
  }
}
