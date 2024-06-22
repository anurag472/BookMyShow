const { axiosInstance } = require("./index");

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/api/users/login", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/api/users/register", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/api/users/get-current-user");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
