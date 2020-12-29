/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostDetailPage from '../../../components/pages/post/PostDetailPage';
import {
  typeGetCard,
  typeInitialCard,
} from '../../../modules/pages/lobby/cards';
import { tabList } from '../../../data/lobby/filter_bar/tabList';

function PostContainer({ match }) {
  const { card } = useSelector(({ cards, authorization }) => ({
    card: cards.card,
  }));

  const userData = JSON.parse(localStorage.getItem('CURRENT_USER'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(typeInitialCard());
    dispatch(typeGetCard(match.params.id));
  }, [dispatch, match]);

  const optionGenerator = (housingTypeBef, spaceBef, acreageBef, colorBef) => {
    const { housingType, space, acreage, color } = tabList;
    const housingTypeAft = Object.keys(housingType)[housingTypeBef];
    const spaceAft = Object.keys(space)[spaceBef];
    const acreageAft = Object.keys(acreage)[acreageBef];
    const colorAft = Object.keys(color)[colorBef];

    const optionList = { housingTypeAft, spaceAft, acreageAft, colorAft };
    return optionList;
  };

  const { housingType, space, acreage, color } = card.postData;
  useEffect(() => {}, [card]);

  return (
    <>
      <PostDetailPage
        options={optionGenerator(housingType, space, acreage, color)}
        card={card}
        userData={userData}
      />
    </>
  );
}

export default PostContainer;
