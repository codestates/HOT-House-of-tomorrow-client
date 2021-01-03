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
  const response = await axios.get('/api/auth/isAuth');
  if (!response.data.isAuth) {
    throw new Error('사용자 인증에 실패했습니다.');
  }
  localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));
  return response.data;
}

export async function logOutAsync() {
  const response = await axios.get('/api/auth/logout');
  localStorage.removeItem('CURRENT_USER');
  if (!response.data.logout) {
    throw new Error('로그 아웃에 실패했습니다.');
  }
  return response.data;
}
