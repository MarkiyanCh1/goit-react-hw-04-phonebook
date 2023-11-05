import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 250px;
  margin: 30px 90px;
  padding: 10px;
  border: 2px solid #beb6b6;
  box-shadow: rgb(179 190 247) 0px 0px 2px 3px;
`;

export const InputFilter = styled.input`
  max-width: 380px;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid teal;
  &:focus,
  &:hover,
  &:active {
    outline: 0;
    outline-offset: 0;
    border: none;
    border-bottom: 2px solid teal;
  }
`;
