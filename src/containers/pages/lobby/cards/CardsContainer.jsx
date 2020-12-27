/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../../../../components/pages/lobby/cards/Cards';
import { typeGetAllCards } from '../../../../modules/pages/lobby/cards';

function CardsContainer() {
  const dispatch = useDispatch();
  const { currentCards } = useSelector(({ cards }) => ({
    currentCards: cards.currentCards,
  }));
  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  useEffect(() => {
    if (userStorage) dispatch(typeGetAllCards());
  }, [dispatch]);

  useEffect(() => {
    if (currentCards) {
      console.log(currentCards);
    }
  }, [currentCards]);

  return (
    <>
      <Cards />
    </>
  );
}

export default CardsContainer;
