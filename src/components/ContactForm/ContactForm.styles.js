import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: red;
`;

export const Input = styled(Field)`
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
