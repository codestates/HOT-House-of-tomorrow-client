/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function postCommentAsync(comment) {
  const response = await axios.post('/api/comment/write', comment);
  if (response.data.writeComment === false)
    throw new Error(response.data.error);
  return response.data;
}
