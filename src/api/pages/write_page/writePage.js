import axios from 'axios';

export async function uploadImageAsync(data) {
  const getRandomInt = (min, max) => {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  };
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const res = await axios.post(
    `http://3.140.150.124:5000/api/utils/uploadimg/${getRandomInt(0, 9999)}`,
    data,
    {
      headers: { 'content-type': 'multipart/form-data', xauth: token },
      withCredentials: true,
    }
  );
  return res.data;
}

export async function writeCardAsync(formData) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const res = await axios.post(
    'http://3.140.150.124:5000/api/post/write',
    formData,
    {
      headers: { xauth: token, 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );
  return res.data;
}
