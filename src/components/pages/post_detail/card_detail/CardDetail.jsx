/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommentFeedContainer from '../../../../containers/pages/post_detail/card_comment_feed/CommentFeedContainer';
import CardHeader from './card_header/CardHeader';
import CardDescription from './card_description/CardDescription';
import CardFooter from './card_footer/CardFooter';

const Block = styled.div`
  padding: 0 15px;
  position: relative;
  width: 750px;
`;

function CardDetail({ options, card, userData, timeDiffToday }) {
  const { postData, comment } = card;
  return (
    <Block>
      <CardHeader
        options={options}
        postData={postData}
        timeDiffToday={timeDiffToday}
      />
      <CardDescription postData={postData} />
      <CardFooter postData={postData} comment={comment} />

      <CommentFeedContainer
        comment={comment}
        userData={userData}
        postId={postData.id}
        timeDiffToday={timeDiffToday}
      />
    </Block>
  );
}

export default CardDetail;
