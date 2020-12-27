/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeGetAllCards } from '../../../../modules/pages/lobby/cards';
import CardsLayout from '../../../../components/pages/lobby/cards/CardsLayout';
import Card from '../../../../components/pages/lobby/cards/Card';

function CardsContainer() {
  const dispatch = useDispatch();
  const { currentCards } = useSelector(({ cards }) => ({
    currentCards: cards.currentCards,
  }));

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  useEffect(() => {
    if (userStorage) dispatch(typeGetAllCards());
  }, [dispatch]);

  const cardList = currentCards.map((element) => (
    <Card key={element.id} element={element} />
  ));

  return <CardsLayout cardList={cardList} />;
}

export default CardsContainer;
