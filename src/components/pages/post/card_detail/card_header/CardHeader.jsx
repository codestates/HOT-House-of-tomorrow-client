import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 15px;
  color: #727272;
  margin: 40px 0 30px;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

const SpanAfter = styled.span`
  &:after {
    content: '|';
    margin: 0 6px 0 6px;
    color: #bdbdbd;
  }
`;

function CardHeader({ options, postData, timeDiffToday }) {
  return (
    <>
      <Header>
        <div>
          <SpanAfter>{options.housingTypeAft}</SpanAfter>
          <SpanAfter>{options.spaceAft}</SpanAfter>
          <SpanAfter>{options.acreageAft}</SpanAfter>
          <span>{options.colorAft}</span>
        </div>
        <span>{postData.date ? timeDiffToday(postData.date) : null}</span>
      </Header>
    </>
  );
}

export default CardHeader;
