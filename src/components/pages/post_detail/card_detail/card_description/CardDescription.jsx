import React from 'react';
import styled from 'styled-components';

const CardImg = styled.article`
  width: 100%;
  img {
    width: 100%;
  }
`;

const CardDescriptionP = styled.p`
  margin: 30px 0px 20px 0px;
  color: #454545;
  text-align: left;
`;

function CardDescription({ postData }) {
  return (
    <>
      <CardImg>
        <img src={postData.roomImage} alt="roomImage" />
      </CardImg>
      <CardDescriptionP>{postData.description}</CardDescriptionP>
    </>
  );
}

export default CardDescription;
