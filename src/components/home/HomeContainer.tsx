import UserInput from "../input/UserInput";

import { Container, GithubIcon, Title } from "./style";
import { Center } from "../../styles";
import { BsGithub } from "react-icons/bs";

function HomeContainer() {
  return (
    <Center>
      <Container>
        <GithubIcon>
          <BsGithub />
        </GithubIcon>
          <Title>Search for GitHub Profile</Title>
        <UserInput />
      </Container>
    </Center>
  );
}

export default HomeContainer;
