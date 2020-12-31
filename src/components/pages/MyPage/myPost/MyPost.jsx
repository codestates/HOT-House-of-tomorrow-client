import React from 'react';
import { useHistory } from 'react-router-dom';
import EmptyState from '../EmptyState';
import MyWriteList from '../MyWriteList';

const MyPost = ({ myWriteLists }) => {
  const history = useHistory();
  const handleNewPost = () => {
    history.push(`/writing`);
  };
  return (
    <>
      {myWriteLists.length > 0 ? (
        <MyWriteList
          handleNewPost={handleNewPost}
          myWriteLists={myWriteLists}
        />
      ) : (
        <EmptyState handleNewPost={handleNewPost} />
      )}
    </>
  );
};

export default MyPost;
