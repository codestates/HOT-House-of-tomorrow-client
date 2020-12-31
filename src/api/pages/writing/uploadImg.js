/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function uploadImg({ postId, file }) {
  const res = await axios.post(`/api/utils/uploadimg?postId${postId}`, file);
  return res;
}
