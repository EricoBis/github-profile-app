import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const StyledInput = styled.input`
  width: 80%;
  height: 22px;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: transparent;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #d3d0d0;

  &:focus {
    outline: none;
    border: 1px solid #8a2be2;
  }
`;

export const StyledButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 12px;
  background-color: #8a2be2;
  color: #fff;
  border: none;
  cursor: pointer;

  svg{
    font-size: 20px;
  }
`;
