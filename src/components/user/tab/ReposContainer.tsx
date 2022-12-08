import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext";
import TabHeader from "./TabHeader";
import { ContainerScroll, Repo } from "./style";
import { Flex } from "../../../styles";

function ReposContainer() {
  const { userRepos } = useContext(UserDataContext);

  return (
    <>
      <TabHeader tab={"Repositories"} />
      {userRepos.length === 0 && <h3>The user has no public repositories!</h3>}
      {userRepos && (
        <ContainerScroll>
          <Flex dir="column" justify="center" align="flex-start">
            {userRepos.map((repos, index) => {
              return (
                <Repo href={`${repos.html_url}`} key={index}>
                  {repos.name}
                </Repo>
              );
            })}
          </Flex>
        </ContainerScroll>
      )}
    </>
  );
}

export default ReposContainer;
