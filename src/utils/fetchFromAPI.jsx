import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response;
  } catch (error) {
    return error;
  }
};
