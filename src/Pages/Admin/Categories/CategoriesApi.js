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

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${httpRequest}/category/list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Categories." + error.message);
  }
};

export const fetchCategoryDetail = async (id) => {
  try {
    const response = await axios.get(`${httpRequest}/category/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch category details" + error.message);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${httpRequest}/category/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete category." + error.message);
  }
};

export const editCategory = async ({ id, formData }) => {
  try {
    const response = await axios.patch(
      `${httpRequest + "/category/" + id}`,
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
    throw new Error("Failed to update category" + error.message);
  }
};
