import axios from 'axios';

export async function getCardInfoAsync(postId) {
  const response = await axios.get(`/api/post/read/${postId}`);
  return response.data.results;
}

export async function updateCardInfoAsync(formData) {
  const response = await axios.post('/api/post/update', formData);
  return response.data;
}
