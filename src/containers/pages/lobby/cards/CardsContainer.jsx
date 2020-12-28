/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeGetAllCards } from '../../../../modules/pages/lobby/cards';
import CardsLayout from '../../../../components/pages/lobby/cards/CardsLayout';
import Card from '../../../../components/pages/lobby/cards/Card';
import FakeCard from '../../../../components/pages/lobby/cards/FakeCard';

function CardsContainer() {
  const dispatch = useDispatch();
  const { currentCards, load } = useSelector(({ cards }) => ({
    currentCards: cards.currentCards,
    load: cards.load,
  }));

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const fakeList = [1, 2, 3, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (userStorage) dispatch(typeGetAllCards());
  }, [dispatch]);

  useEffect(() => {}, [currentCards]);

  const cardList = load
    ? currentCards.map((element) => <Card key={element.id} element={element} />)
    : fakeList.map((ele) => <FakeCard />);

  return <CardsLayout cardList={cardList} />;
}

export default CardsContainer;
