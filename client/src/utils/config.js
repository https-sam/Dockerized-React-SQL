import axios from "axios";

export const config = {
  FETCH_USER_ENDPOINT: "/fetch-users",
  ADD_USER_ENDPOINT: "/add-user",
};

export default axios.create({ baseURL: "http://localhost:8080" });
