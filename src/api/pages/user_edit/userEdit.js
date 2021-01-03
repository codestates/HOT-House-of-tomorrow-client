/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserInfoAsync() {
  const response = await axios.get('/api/auth/getuser');
  return response.data;
}

export async function postUserUpdateAsync(data) {
  const response = await axios.post('/api/auth/updateuser', data);
  return response.data;
}
