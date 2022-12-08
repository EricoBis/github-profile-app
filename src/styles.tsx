import { Link } from "react-router-dom";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background-color: #0d1117;

    @media (width < 600px) {
      background-color: #010409;
    }
  }
`;

export default GlobalStyle;

export const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: #fff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

interface FlexProps {
  dir: string;
  justify: string;
  align: string;
}

export const Flex = styled.div<FlexProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export const Center = styled.div`
  width: 100%;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (width < 600px) {
    margin-top: 0;

  }
`;
