import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const Block = styled.div`
  margin: 12px 0px 30px 0px;
  ul {
    padding: 0;
    display: flex;
    list-style: none;
    margin: 0;

    li {
      margin-right: 5px;
      span {
        display: flex;
        align-items: center;

        strong {
          margin-right: 5px;
          color: white;
          font-weight: bold;
          font-size: 15px;
        }
      }
      button {
        cursor: pointer;
        padding: 3px 6px 2px 11px;
        border-radius: 15px;
        border: none;
        background: #54d0a7;
        &:focue {
          outline: none;
        }

        svg {
          color: aliceblue;
          font-size: 15px;
          position: relative;
          bottom: 1px;
        }
      }
    }
  }
`;

const InitialBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  span {
    font-size: 15px;
    font-weight: 800;
    color: #3db38c;
  }
`;
function BottomTags({ currentTag, initialTags }) {
  const tagList = Object.values(currentTag);
  const tagElements = tagList.map((tag) => <Tag tag={tag} key={tag} />);
  return (
    <Block>
      <ul>
        {tagElements}
        {tagElements.length ? (
          <InitialBtn type="button" onClick={initialTags}>
            <span>초기화</span>
          </InitialBtn>
        ) : null}
      </ul>
    </Block>
  );
}

export default BottomTags;
