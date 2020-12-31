import React from 'react';
import styled from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Wrap = styled.ul`
  display: flex;
  flex-flow: wrap;
  padding: 10px;
  box-sizing: border-box;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    transform: scale(1.02);
    background-color: #efefef;
  }
`;

const ItemImage = styled.img`
  width: 355px;
  height: 355px;
  border-radius: 8px;
`;

const MyWriteList = ({ myWriteLists }) => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const handleMyWrite = (id) => {
    history.push(`${path}/${id}`);
  };

  return (
    <Wrap>
      {myWriteLists.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => {
            handleMyWrite(item.id);
          }}
        >
          <ItemImage src={item.profileImg} />
        </ListItem>
      ))}
    </Wrap>
  );
};

export default MyWriteList;
