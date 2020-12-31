import React from 'react';
import styled from 'styled-components';

const SelectWrap = styled.div`
  display: inline-block;
`;
const Select = styled.select`
  padding: 10px 30px 10px 10px;
  margin: 0 15px 10px 0px;
  width: auto;
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  line-height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border-color: #bdbdbd;
  color: #000;
  outline: none;
  &:focus {
    border-color: #161616;
  }
`;

const Option = styled.option`
  color: #000;
`;

const Selects = ({
  housingType,
  color,
  space,
  onSelectColor,
  onSelectSpace,
  onSelectHousingType,
}) => (
  <SelectWrap>
    <Select value={space} onChange={onSelectSpace}>
      <Option value="0">10평 미만</Option>
      <Option value="1">20평대</Option>
      <Option value="2">30평대</Option>
      <Option value="3">40평대</Option>
      <Option value="4">50평 이상</Option>
    </Select>
    <Select value={housingType} onChange={onSelectHousingType}>
      <Option value="0">원룸 오피스텔</Option>
      <Option value="1">아파트</Option>
      <Option value="2">빌라연립</Option>
      <Option value="3">단독주택</Option>
      <Option value="4">사무공간</Option>
      <Option value="5">상업공간</Option>
    </Select>
    <Select value={color} onChange={onSelectColor}>
      <Option value="0">그레이</Option>
      <Option value="1">베이지</Option>
      <Option value="2">화이트</Option>
      <Option value="3">블랙</Option>
      <Option value="4">민트</Option>
      <Option value="5">블루</Option>
    </Select>
  </SelectWrap>
);

export default Selects;
