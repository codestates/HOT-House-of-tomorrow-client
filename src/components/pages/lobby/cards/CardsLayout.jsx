import React from 'react';
import styled from 'styled-components';

const CardsBlock = styled.div`
  display: flex;
  flex-flow: wrap;
`;

function CardsLayout({ cardList }) {
  return <CardsBlock>{cardList}</CardsBlock>;
}

export default CardsLayout;
