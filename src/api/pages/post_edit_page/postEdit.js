import axios from 'axios';

export async function getCardInfoAsync(postId) {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.get(
    `http://3.140.150.124:5000/api/post/read/${postId}`,
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
    'http://3.140.150.124:5000/api/post/update',
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
