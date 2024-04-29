import axios from "axios";
import { getLocalToken } from "./helpers";

const requestAutorization = () => {
  const token = getLocalToken("bripan_token");
  return `Bearer ${token}`;
};
export const Custom = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: requestAutorization(),
  },
});

export const CustomAdd = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: requestAutorization(),
  },
});
