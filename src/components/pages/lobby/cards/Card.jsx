import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { RiFileCopyFill } from 'react-icons/ri';

const CardBlock = styled.div`
  z-index: 1;
  margin-right: 17px;
  margin-bottom: 10px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: #757575;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: 3px solid #fcf4f400;
    border-radius: 100%;
  }

  strong {
    color: #474747;
    font-weight: 500;
    margin-bottom: 3px;
    cursor: pointer;
  }
`;
const CardContents = styled.div`
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
  width: 270px;
  height: 270px;
  border-radius: 10px;
}

  a {
    cursor: pointer;
  }
  img {
    right: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    width: 100%;
  }
  div {
    position: absolute;
    right: 18px;
    bottom: 16px;
  }

`;

const ViewSpan = styled.span`
  font-size: 13px;
  color: #fff;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  font-weight: 500;
`;

const ContentsIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
  color: white;
`;

const CardBottom = styled.div`
  display: flex;
  padding: 5px 28px;
  justify-content: space-between;
  margin-bottom: 7px;

  button {
    display: flex;
    background: none;
    outline: none;
    border: none;
    align-items: center;
    cursor: pointer;
  }

  span {
    margin-left: 4px;
    font-size: 12px;
    color: #424242;
  }
`;

const CommentBtn = styled(MdModeComment)`
  color: #84ccb5;
  font-size: 28px;
`;

const DescriptionBlock = styled.div`
  width: 270px;
  text-align: start;
  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    color: #414141;
  }
`;

const CommentlI = styled.li`
  list-style: none;
  display: flex;
  align-items: flex-start;
}

  img {
    margin-right: 5px;
    height: 20px;
    width: 20px;
    border: 3px solid #fcf4f4;
    border-radius: 100%;
  }
  span {
    font-weight: 400;
    font-size: 15px;
    color: #3f3f3f;
  }

  div {
    strong {
      color: #575757;
      font-weight: 700;
      font-size: 15px;
      margin-right:5px
    }
    
  }
`;

const CommentBlock = styled.div`
  ul {
    padding: 0;
    width: 270px;
  }
`;

const LinkTag = styled(Link)`
  text-decoration: none;
`;
const LikeIcon = styled(AiFillHeart)`
  font-size: 25px;
  margin-right: 2px;
  fill: ${(props) => (props.like === 'true' ? '#2fd8b7' : 'transparent')};
  stroke: ${(props) => (props.like === 'true' ? '#2fd8b7' : ' #8b8b8b')};

  stroke-width: 66.1px;
  transition: fill 0.1s, stroke 0.1s;
  &:hover {
    cursor: pointer;
  }
`;

function Card({ element, userLike, onLikeHandler }) {
  const { id, User, view, roomImage, like, comments, description } = element;

  const [cardLike, setCardLike] = useState({
    like: null,
    press: false,
  });

  useEffect(() => {
    setCardLike({
      ...cardLike,
      like,
    });
  }, []);

  useEffect(() => {
    if (userLike) {
      if (userLike.includes(id)) {
        setCardLike({
          ...cardLike,
          like,
          press: true,
        });
      }
    }
  }, []);

  const pressLikeHandler = (postId) => {
    // eslint-disable-next-line no-unused-expressions
    cardLike.press
      ? setCardLike({
          ...cardLike,
          like: cardLike.like - 1,
          press: false,
        })
      : setCardLike({ ...cardLike, like: cardLike.like + 1, press: true });
    onLikeHandler(postId);
  };

  const commentList = comments
    ? comments.map((comment) => (
        // eslint-disable-next-line react/jsx-indent
        <CommentlI key={comment.postId}>
          <img src={comment.User.profileImg} alt="profileImage" />
          <div>
            <strong>{comment.User.nickname}</strong>
            <span>{comment.comment}</span>
          </div>
        </CommentlI>
      ))
    : null;

  return (
    <CardBlock>
      <CardHeader>
        <LinkTag to={`users/${User.oAuthId}`}>
          <img src={User.profileImg} alt="profileImage" />
        </LinkTag>
        <span>
          <LinkTag to={`users/${User.oAuthId}`}>
            <strong>{User.nickname}</strong>
          </LinkTag>
          <p>{User.introduction}</p>
        </span>
      </CardHeader>
      <CardContents>
        <Link to={`card_collections/${id}`}>
          <ContentsIcon>
            <RiFileCopyFill />
          </ContentsIcon>
          <img src={roomImage} alt="roomImage" />
          <div>
            <ViewSpan>
              조회수
              {view}
            </ViewSpan>
          </div>
        </Link>
      </CardContents>
      <CardBottom>
        <button type="button" onClick={() => pressLikeHandler(id)}>
          <LikeIcon like={String(cardLike.press)} />
          <span>{cardLike.like}</span>
        </button>
        <button type="button">
          <CommentBtn />
          <span>{comments ? comments.length : 0}</span>
        </button>
      </CardBottom>
      <DescriptionBlock>
        <span>{description}</span>
      </DescriptionBlock>
      <CommentBlock>
        <ul>{commentList[0]}</ul>
      </CommentBlock>
    </CardBlock>
  );
}

export default Card;
