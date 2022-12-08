import { StyledLink } from "../../styles";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #30363d;
  background: #0d1117;
  border-radius: 10px;
`

export const IconLink = styled(StyledLink)`
  svg{
    font-size: 32px;
    cursor: pointer;
    &:hover {
      color: #8a2be2;
    }
  }
`
export const MainContainer = styled.div`
  width: 90%;
  max-width: 542px;
  max-height: 500px;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #010409;
  border: 1px solid #30363d;

  @media (width < 600px) {
    border: none;
    max-height: none;
  }
`;