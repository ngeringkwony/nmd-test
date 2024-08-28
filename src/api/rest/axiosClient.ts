import axios from 'axios';
import { BASE_URL } from '../constants';

const apiClient = axios.create({
  baseURL: BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// POST request
export const post = (
  route: string,
  data: Record<string, unknown> | FormData,
) => {
  return apiClient
    .post(route, data)
    .then(res => {return {success: true, data: res.data}})
    .catch(err => { console.log("IS ERR"); return err.response});
};

// add other request types here

export default apiClient;
