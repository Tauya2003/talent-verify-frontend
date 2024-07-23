import axios from "axios";

const BASE_URL = "https://talentverify-9380c5a023d2.herokuapp.com/api";

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
