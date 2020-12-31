/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserCardsAsync(userId) {
  const response = await axios.get(`/api/mypage/getpost/${userId}`);
  if (response.data.getMyPost === false) throw new Error(response.data.error);
  return response.data;
}

export async function getUserLikesAsync(userId) {
  const response = await axios.get(`/api/mypage/getlikepost`);
  console.log(response);
  if (response.data.getLikePost === false)
    throw new Error('좋아요 게시물 조회 실패');
  return response.data;
}
