import axios from 'axios';

export async function getCardInfoAsync(postId) {
  const response = await axios.get(
    `http://3.140.150.124:5000/api/post/read/${postId}`
  );
  return response.data.results;
}

export async function updateCardInfoAsync(formData) {
  const response = await axios.post(
    'http://3.140.150.124:5000/api/post/update',
    formData
  );
  return response.data;
}
