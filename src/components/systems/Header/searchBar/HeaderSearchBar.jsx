import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.div`
  input {
    display: block;
    width: 300px;
    box-sizing: border-box;
    padding: 5px 25px;
    font-family: inherit;
    font-size: 15px;
    line-height: 20px;
    background-color: #f5f5f5;
    color: #424242;
    border: none;
    border-radius: 5px;
    outline: none;
    &::-webkit-input-placeholder {
      color: #bababa;
      text-align: center;
    }
  }
`;

function HeaderSearchBar() {
  return (
    <>
      <InputBlock>
        <input
          type="text"
          autoComplete="off"
          size="1"
          aria-autocomplete="list"
          placeholder="내일의 집 통합 검색"
          aria-label="내일의 집 통합 검색"
        />
      </InputBlock>
    </>
  );
}

export default HeaderSearchBar;
