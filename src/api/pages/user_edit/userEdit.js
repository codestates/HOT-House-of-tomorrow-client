/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserInfoAsync() {
  const response = await axios.get(
    'http://3.140.150.124:5000/api/auth/getuser'
  );
  return response.data;
}

export async function postUserUpdateAsync(data) {
  const response = await axios.post(
    'http://3.140.150.124:5000/api/auth/updateuser',
    data
  );
  return response.data;
}
