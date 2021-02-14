import axios from 'axios';

export async function loginAsync(formData) {
  const response = await axios.post('/api/auth/login', formData);
  if (!response.data.loginSuccess) {
    throw new Error('로그인에 실패했습니다.');
  }
  localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));

  return response.data;
}

export async function isAuthAsync() {
  const { token } = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const response = await axios.get('/api/auth/isAuth', {
    headers: {
      xauth: token,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  if (!response.data.isAuth) {
    throw new Error('사용자 인증에 실패했습니다.');
  }
  localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));
  return response.data;
}
