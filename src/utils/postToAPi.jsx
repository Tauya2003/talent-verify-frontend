import axios from "axios";

const BASE_URL = "https://talentverify-9380c5a023d2.herokuapp.com/api";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const postToAPI = async (url, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, data, options);
    return response;
  } catch (error) {
    return error;
  }
};
