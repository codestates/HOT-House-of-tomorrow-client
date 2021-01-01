import React from 'react';
import styled from 'styled-components';
import { RiFileCopyFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Block = styled.div`
  padding: 0;
  width: 100%;
`;
const Ul = styled.ul`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  justify-content: flex-start;
  li {
    margin: 0px 10px 10px 0px;
    div {
      position: relative;
      overflow: hidden;
      width: 305px;
      height: 305px;
      span {
        cursor: pointer;
        svg {
          right: 10px;
          font-size: 20px;
          color: #ffffffd6;
          position: absolute;
          top: 10px;
          box-shadow: -3px 9px 11px rgba(0, 0, 0, 0.1);
          &: hover {
            color: white;
          }
        }
      }
      img {
        height: 100%;
        width: 305px;
      }
    }
  }
`;
function UserCards({ userPosts }) {
  const cards = userPosts.map((card) => (
    <li key={card.id}>
      <Link to={`/card_collections/${card.id}`}>
        <div>
          <span>
            <RiFileCopyFill />
          </span>
          <img src={card?.roomImage} alt="#" />
        </div>
      </Link>
    </li>
  ));
  return (
    <Block>
      <Ul>{cards}</Ul>
    </Block>
  );
}

export default UserCards;
