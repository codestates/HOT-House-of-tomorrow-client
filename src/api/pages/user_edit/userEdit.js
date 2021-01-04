/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserInfoAsync() {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.get(
    'http://3.140.150.124:5000/api/auth/getuser',
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  return response.data;
}

export async function postUserUpdateAsync(data) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.post(
    'http://3.140.150.124:5000/api/auth/updateuser',
    data,
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  return response.data;
}
