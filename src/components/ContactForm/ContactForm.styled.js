import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  padding: 15px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 300px;
  height: 20px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: 600;
`;

export const BtnStyled = styled.button`
height: 30px;
margin-top: 10px;
font-weight: 700;
border-radius: 3px;
cursor: pointer;
`;

export const ErrorMsg = styled(ErrorMessage)`
color: #ff0000;
font-size: 14px;
font-weight: 400;
`;