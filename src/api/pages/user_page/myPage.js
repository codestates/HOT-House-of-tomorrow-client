/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserCardsAsync() {
  const response = await axios.get('/api/mypage/getpost');
  if (response.data.getMyPost === false) throw new Error(response.data.error);
  return response.data;
}
