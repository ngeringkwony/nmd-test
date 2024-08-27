import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.1.9:5001', // Adjust the port if needed
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
