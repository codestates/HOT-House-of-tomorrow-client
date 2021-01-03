import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BottomTags from '../../../../components/systems/filter_Bar/bottom_tags/BottomTags';
import {
  typeInitialCards,
  typeGetAllCards,
} from '../../../../modules/pages/lobby/cards';

function BottomTagsContainer() {
  const dispatch = useDispatch();
  const { currentTag } = useSelector(({ cards }) => ({
    currentTag: cards.currentTag,
  }));

  const initialTags = () => {
    dispatch(typeGetAllCards());
    dispatch(typeInitialCards());
  };
  return (
    <>
      <BottomTags currentTag={currentTag} initialTags={initialTags} />
    </>
  );
}

export default BottomTagsContainer;
