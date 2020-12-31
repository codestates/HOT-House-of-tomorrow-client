import React from 'react';
import Writing from '../../../components/pages/writing/Writing';

const WritingContainer = ({ history }) => {
  const goLobby = () => {
    history.push('/');
  };
  return <Writing goLobby={goLobby} />;
};

export default WritingContainer;
