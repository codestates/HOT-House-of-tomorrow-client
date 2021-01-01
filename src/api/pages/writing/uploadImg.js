/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function uploadImg(data) {
  const res = await axios.post(`api/utils/uploadimg`, data, {
    header: { 'content-type': 'multipart/form-data' },
  });
  return res;
}
