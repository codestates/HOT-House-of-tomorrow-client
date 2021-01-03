import axios from 'axios';

export async function uploadImageAsync(data) {
  const getRandomInt = (min, max) => {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  };
  const res = await axios.post(
    `/api/utils/uploadimg/${getRandomInt(0, 9999)}`,
    data,
    {
      header: { 'content-type': 'multipart/form-data' },
    }
  );
  return res.data;
}

export async function writeCardAsync(formData) {
  const res = await axios.post('/api/post/write', formData);
  return res.data;
}
