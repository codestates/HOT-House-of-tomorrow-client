/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  padding: 0 15px;
  position: relative;
  width: 750px;
`;
const Header = styled.header`
  font-size: 15px;
  color: #727272;
  margin: 40px 0 30px;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

const SpanAfter = styled.span`
  &:after {
    content: '|';
    margin: 0 6px 0 6px;
    color: #bdbdbd;
  }
`;

const CardImg = styled.article`
  width: 100%;
  img {
    width: 100%;
  }
`;

const CardDescription = styled.p`
  margin: 30px 0px 20px 0px;
  color: #454545;
  text-align: left;
`;

const CardFooter = styled.footer`
  text-align: left;
  p {
    span {
      font-size: 12px;
      display: inline-block;
      margin: 0;
      padding: 0;
      color: #727272;
    }
    span:after {
      content: '·';
      margin: 0 7px 0 4px;
      color: #bdbdbd;
      font-size: 13px;
      font-weight: 400;
    }
  }
`;

function CardDetail({ options, card }) {
  const { postData, comment } = card;
  useEffect(() => {
    console.log(postData.roomImage);
  }, [card]);
  return (
    <Block>
      <Header>
        <div>
          <SpanAfter>{options.housingTypeAft}</SpanAfter>
          <SpanAfter>{options.spaceAft}</SpanAfter>
          <SpanAfter>{options.acreageAft}</SpanAfter>
          <span>{options.colorAft}</span>
        </div>
        <span>{postData.date}</span>
      </Header>
      <CardImg>
        <img src={postData.roomImage} alt="roomImage" />
      </CardImg>
      <CardDescription>{postData.description}</CardDescription>
      <CardFooter>
        <p>
          <span>
            조회수
            {postData.view}
          </span>
          <span>
            좋아요
            {postData.like}
          </span>
          <span>
            댓글
            {comment.length}
          </span>
        </p>
      </CardFooter>
    </Block>
  );
}

export default CardDetail;
