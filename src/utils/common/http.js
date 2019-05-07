import axios from "axios";
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "";
export default {
  post(url, data) {
    return axios.post(url, data);
  },
  get(url, data) {
    return axios.get(url, data);
  },
};