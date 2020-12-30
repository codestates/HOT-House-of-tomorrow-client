import React from 'react';
import MyPage from '../../../components/systems/MyPage/MyPage';

function MyPageContainer({ history }) {
  const goEdit = () => {
    history.push('/edit');
  };
  return <MyPage goEdit={goEdit} />;
}

export default MyPageContainer;
