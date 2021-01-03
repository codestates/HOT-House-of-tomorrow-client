import React from 'react';
import styled from 'styled-components';
import emptyImg from '../../../../public/empty-placeholder.png';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
  width: 1145px;
`;

const EmptyImg = styled.img`
  width: 160px;
  height: 120px;
  margin-bottom: 20px;
`;

const EmptyDescription = styled.div`
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const NewPostButton = styled.button`
  padding: 0 16px;
  line-height: 30px;
  color: #fff;
  font-weight: 700;
  background-color: #09addb;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EmptyState = ({ handleNewPost }) => (
  <Wrap>
    <EmptyImg src={emptyImg} alt="empty_image" />
    <EmptyDescription>
      게시글이 없습니다.
      <br />
      새로운 게시글을 작성해 주세요
    </EmptyDescription>
    <NewPostButton onClick={handleNewPost}>새 게시글</NewPostButton>
  </Wrap>
);

export default EmptyState;
