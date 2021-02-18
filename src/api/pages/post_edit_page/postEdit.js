import axios from 'axios';

export async function getCardInfoAsync(postId) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.get(
    `https://houseoftomorrow.gq/api/post/read/${postId}`,
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  return response.data.results;
}

export async function updateCardInfoAsync(formData) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.post(
    'https://houseoftomorrow.gq/api/post/update',
    formData,
    {
      headers: {
        xauth: token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  return response.data;
}
