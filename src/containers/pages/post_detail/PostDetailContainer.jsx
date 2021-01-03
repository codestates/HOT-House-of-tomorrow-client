import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostDetailPage from '../../../components/pages/post_detail/PostDetailPage';
import {
  typeGetCard,
  typeInitialCard,
} from '../../../modules/pages/lobby/cards';
import { tabList } from '../../../data/lobby/filter_bar/tabList';

function PostContainer({ match, history }) {
  const { card, isAuth } = useSelector(({ cards, authorization }) => ({
    card: cards.card,
    isAuth: authorization.isAuth,
  }));

  const userData = JSON.parse(localStorage.getItem('CURRENT_USER'));

  const timeDiffToday = (value) => {
    const today = new Date();
    const timeValue = new Date(value);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

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
        timeDiffToday={timeDiffToday}
        isAuth={isAuth}
        history={history}
      />
    </>
  );
}

export default PostContainer;
