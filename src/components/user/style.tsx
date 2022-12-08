import styled from "styled-components";
import { StyledLink } from "../../styles";

export const LinkContainer = styled(StyledLink)`
  width: 20%;
  padding: 5px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #30363d;
  cursor: pointer;
    font-size: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid #8a2be2;
  }
`;

export const Img = styled.img`
  width: 150px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #30363d;
`;

export const Name = styled.h3`
  margin: 0;
  font-weight: 600;
`;

export const Login = styled.h4`
  margin: 0;
  font-weight: 500;
  color: #8b949e;
`;

export const Bio = styled.p`
  font-size: 16px;
  color: #c9d1d9;
`;

export const Location = styled.div`
  svg {
    font-size: 16px;
    margin-right: 5px;
  }
  p {
    font-size: 14px;
    margin: 0 ;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;

