/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function postCommentAsync(comment) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.post(
    'http://3.140.150.124:5000/api/comment/write',
    comment,
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  if (response.data.writeComment === false)
    throw new Error(response.data.error);
  return response.data;
}

export async function deleteCommentAsync(comment) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.post(
    'http://3.140.150.124:5000/api/comment/delete',
    comment,
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  if (response.data.deleteComment === false)
    throw new Error(response.data.error);
  return response.data;
}

export async function likePostAsync(postId) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.post(
    'http://3.140.150.124:5000/api/lobby/likepost',
    { postId },
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  if (response.data.updateSuccess === false)
    throw new Error(response.data.updateSuccess);
  return response.data;
}

export async function deletePostAsync(postId) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.post(
    'http://3.140.150.124:5000/api/post/delete',
    { postId },
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  if (response.data.postDeleted === false)
    throw new Error(`postDeleted : ${response.data.postDeleted}`);
  return response.data.postDeleted;
}
