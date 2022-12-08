import styled, { css } from "styled-components";
import { StyledLink } from "../../../styles";

export const Header = styled.div`
  border-radius: 10px;
  padding: 10px;
  background: #8a2be2;
`;

const baseTabContainer = css`
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  background: #0d1117;
  border: 1px solid #30363d;
  margin-top: 16px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 1px solid #8a2be2;
  }
`;
export const Repo = styled.a`
  ${baseTabContainer}
`;

export const Follow = styled.div`
  ${baseTabContainer}
  display: flex;
  flex-direction: row;

  img {
    width: 34px;
    margin-right: 6px;
    border-radius: 50%;
  }
`;

export const ContainerScroll = styled.div`
  height: 55vh;
  overflow: hidden;
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: black transparent;

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
  }

  @media (width < 600px) {
    height: auto;
    overflow: auto;
    overflow-y: auto;
  }
`;
