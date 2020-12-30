/* eslint-disable no-unused-vars */
import React from 'react';
import { BsHeart } from 'react-icons/bs';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Block = styled.div`
  position: sticky;
  top: 80px;
`;

const Like = styled(BsHeart)`
  font-size: 20px;
  color: #444444;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const BtnBlock = styled.div`
  margin-bottom: 40px;
  display: flex;

  button {
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

    span {
      font-size: 15px;
      color: #444444;
    }
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

function CardSideInfo({ card }) {
  return (
    <Block>
      <BtnBlock>
        <button type="button">
          <Like />
          <span>{card.postData.like}</span>
        </button>
        <button type="button">
          <Like />
          <span>{card.postData.like}</span>
        </button>
      </BtnBlock>
      <UserInfoBlock>
        <div>
          <Link to={`card_collections/${card.UserAnotherPosts[0].id}`}>
            <img src={card.postData.User.profileImg} alt="profile_image" />
            <span>{card.postData.User.nickname}</span>
          </Link>
          <p>{card.postData.User.introduction}</p>
        </div>
      </UserInfoBlock>
      <RelatedPostsBlock>
        <ul>
          <li>
            <Link to={`${card.UserAnotherPosts[0].id}`}>
              <RelatedPostImg1
                src={card.UserAnotherPosts[0]?.roomImage}
                alt="relatedPostImage"
              />
            </Link>
          </li>
          <li>
            <Link to={`${card.UserAnotherPosts[1].id}`}>
              {card.UserAnotherPosts[1] ? (
                <RelatedPostImg2
                  src={card.UserAnotherPosts[1]?.roomImage}
                  alt="relatedPostImage"
                />
              ) : (
                <EmptyBlock />
              )}
            </Link>
          </li>
          <li>
            <Link to={`${card.UserAnotherPosts[2].id}`}>
              {card.UserAnotherPosts[2] ? (
                <RelatedPostImg3
                  src={card.UserAnotherPosts[2]?.roomImage}
                  alt="relatedPostImage"
                />
              ) : (
                <EmptyBlock />
              )}
            </Link>
          </li>
          <li>
            <Link to={`${card.UserAnotherPosts[3].id}`}>
              {card.UserAnotherPosts[3] ? (
                <RelatedPostImg4
                  src={card.UserAnotherPosts[3]?.roomImage}
                  alt="relatedPostImage"
                />
              ) : (
                <EmptyBlock />
              )}
            </Link>
          </li>
        </ul>
      </RelatedPostsBlock>
    </Block>
  );
}

export default CardSideInfo;
