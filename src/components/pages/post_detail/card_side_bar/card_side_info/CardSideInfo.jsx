/* eslint-disable consistent-return */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Block = styled.div`
  position: sticky;
  top: 80px;
`;

const Like = styled(AiFillHeart)`
  font-size: 20px;
  margin-right: 10px;
  fill: ${(props) => (props.like === 'true' ? 'white' : 'transparent')};
  stroke: ${(props) => (props.like === 'true' ? '#2fd8b7' : ' #8b8b8b')};

  stroke-width: 66.1px;
  transition: fill 0.1s, stroke 0.1s;
  &:hover {
    cursor: pointer;
  }
`;

const BtnBlock = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;

  span {
    font-size: 15px;
    color: #444444;
  }
`;

const EditOrDeleteBtn = styled.button`
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #f5f5f5;
  border: none;
  width: 140px;
  margin-right: 8px;
  height: 45px;
  padding: 7px 8px;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const LikeBtn = styled.button`
  background: #2fd8b7;
  margin-bottom: 10px;
  cursor: pointer;
  border: none;
  width: 140px;
  margin-right: 8px;
  height: 45px;
  padding: 7px 8px;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
  svg {
    stroke: #ffffff;
  }
  span {
    color: white;
    font-weight: 500;
  }
`;

const UserInfoBlock = styled.div`
  text-align: left;
  padding-left: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  div {
    position: relative;
    a {
      font-weight: 500;
      color: #090909;
      text-decoration: none;
      font-size: 15px;
      text-decoration: none;

      img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        position: absolute;
        left: -60px;
        top: -7px;
      }
    }
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #444444;
  }
`;

const RelatedPostsBlock = styled.div`
  width: 65%;
  margin-bottom: 15px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
    display: flex;
    width: 300px;

    li {
      padding: 1px 1px;
      a {
      }
    }
  }
`;

const RelatedPostImg1 = styled.img`
  border-radius: 5px 0px 0px 0px;
  width: 145px;
  height: 145px;
`;
const RelatedPostImg2 = styled.img`
  border-radius: 0px 5px 0px 0px;
  width: 145px;
  height: 145px;
`;
const RelatedPostImg3 = styled.img`
  border-radius: 0px 0px 0px 5px;
  width: 145px;
  height: 145px;
`;
const RelatedPostImg4 = styled.img`
  border-radius: 0px 0px 5px 0px;
  width: 145px;
  height: 145px;
`;

const EmptyBlock = styled.div`
  border-radius: 5px;
  background: #e1e1e1;
  width: 145px;
  height: 145px;
`;

const A = styled(Link)`
  text-decoration: none;
`;

function CardSideInfo({
  card,
  onLikeHandler,
  like,
  deleteCardHandler,
  isAuth,
}) {
  const renderSwitch = (ele, param) => {
    switch ((ele, param)) {
      case 0:
        return <RelatedPostImg1 src={ele.roomImage} alt="relatedPostImage" />;
      case 1:
        return <RelatedPostImg2 src={ele.roomImage} alt="relatedPostImage" />;
      case 2:
        return <RelatedPostImg3 src={ele.roomImage} alt="relatedPostImage" />;
      case 3:
        return <RelatedPostImg4 src={ele.roomImage} alt="relatedPostImage" />;
      default:
        return <EmptyBlock />;
    }
  };

  const list =
    card.UserAnotherPosts.length >= 1
      ? card.UserAnotherPosts.map((ele, index) => {
          if (index === 4) return;
          return (
            <li key={ele.id}>
              <Link to={String(ele.id)}>{renderSwitch(ele, index)}</Link>
            </li>
          );
        })
      : null;
  return (
    <Block>
      <BtnBlock>
        {isAuth?.oAuthId === card.postData.userId ? (
          <A to={`/edit_card/${card.postData.id}`}>
            <EditOrDeleteBtn>
              <span>게시물 수정</span>
            </EditOrDeleteBtn>
          </A>
        ) : null}
        {isAuth?.oAuthId === card.postData.userId ? (
          <EditOrDeleteBtn
            type="button"
            onClick={() => deleteCardHandler(card.postData.id)}
          >
            <span>게시물 삭제</span>
          </EditOrDeleteBtn>
        ) : null}
        <LikeBtn type="button" onClick={() => onLikeHandler(card.postData.id)}>
          <Like like={String(like.pressLike)} />
          <span>{like.likes}</span>
        </LikeBtn>
      </BtnBlock>
      <UserInfoBlock>
        <div>
          <Link to={`/users/${card.postData.userId}`}>
            <img src={card.postData.User.profileImg} alt="profile_image" />
            <span>{card.postData.User.nickname}</span>
          </Link>
          <p>{card.postData.User.introduction}</p>
        </div>
      </UserInfoBlock>
      <RelatedPostsBlock>
        <ul>{list}</ul>
      </RelatedPostsBlock>
    </Block>
  );
}

export default CardSideInfo;
