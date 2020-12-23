import React from 'react';
import styled from 'styled-components';

const ModalBlock = styled.div`
  ul {
  }
`;
function FilterModal() {
  return (
    <ModalBlock>
      <ul>
        <li>최근 인기순</li>
        <li>역대 인기순</li>
      </ul>
    </ModalBlock>
  );
}

export default FilterModal;
