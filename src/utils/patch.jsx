import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const patch = async (url, data) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${url}`, data, options);
    return response;
  } catch (error) {
    return error;
  }
};
