import React from 'react';
import styled from 'styled-components';
import CardDetail from './card_detail/CardDetail';
import SideBarContainer from '../../../containers/pages/post_detail/card_side_bar/SideBarContainer';

const Block = styled.div`
  top: 60px;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1145px;
`;
function PostDetailPage({
  options,
  card,
  userData,
  timeDiffToday,
  isAuth,
  history,
}) {
  return (
    <Block>
      {card.postData.id ? (
        <>
          <CardDetail
            options={options}
            card={card}
            userData={userData}
            timeDiffToday={timeDiffToday}
          />
          <SideBarContainer card={card} isAuth={isAuth} history={history} />
        </>
      ) : null}
    </Block>
  );
}

export default PostDetailPage;
