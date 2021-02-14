/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeGetAllCards } from '../../../../modules/pages/lobby/cards';
import { typeLikePost } from '../../../../modules/pages/post/cardDetail';
import CardsLayout from '../../../../components/pages/lobby/cards/CardsLayout';
import Card from '../../../../components/pages/lobby/cards/Card';
import FakeCard from '../../../../components/pages/lobby/cards/FakeCard';
import LoginContainer from '../../../systems/user_login/LoginContainer';

//* import custom Hook
import useLogin from '../../../../hooks/useLogin';

function CardsContainer({ isAuth }) {
  const { onLoginModal, loginModal } = useLogin();

  const dispatch = useDispatch();
  const { currentCards, load } = useSelector(({ cards }) => ({
    currentCards: cards.currentCards,
    load: cards.load,
  }));
  const [likeList, setLikeList] = useState([]);

  const fakeList = [1, 2, 3, 5, 6, 7, 8, 9];

  useEffect(() => {
    dispatch(typeGetAllCards());
  }, []);

  useEffect(() => {
    if (isAuth) {
      setLikeList(isAuth?.likeposts);
    }
  }, [isAuth]);

  const onLikeHandler = (postId) => {
    dispatch(typeLikePost(postId));
  };

  const cardList =
    load && likeList
      ? currentCards.map((element) => (
          // eslint-disable-next-line react/jsx-indent
          <Card
            key={element.id}
            element={element}
            onLikeHandler={onLikeHandler}
            userLike={
              likeList.length >= 1
                ? likeList.split(',').map((e) => Number(e))
                : null
            }
            onLoginModal={onLoginModal}
          />
        ))
      : fakeList.map((ele) => <FakeCard key={ele} />);

  return (
    <>
      <CardsLayout cardList={cardList} />
    </>
  );
}

export default CardsContainer;
