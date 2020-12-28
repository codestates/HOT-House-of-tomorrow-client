/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../../components/pages/post/Post';
import { typeGetCard } from '../../../modules/pages/lobby/cards';

function PostContainer({ match }) {
  const { card } = useSelector(({ cards }) => ({
    card: cards.card,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(typeGetCard(match.params.id));
  }, []);

  useEffect(() => {
    console.log(card);
  }, [card]);
  return (
    <>
      <Post />
    </>
  );
}

export default PostContainer;
