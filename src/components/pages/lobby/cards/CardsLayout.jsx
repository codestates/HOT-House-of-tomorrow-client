import React from 'react';
import styled from 'styled-components';

const CardsBlock = styled.div`
  display: flex;
`;

function CardsLayout({ cardList }) {
  return <CardsBlock>{cardList}</CardsBlock>;
}

export default CardsLayout;
