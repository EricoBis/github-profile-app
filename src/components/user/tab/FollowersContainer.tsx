import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext";
import TabHeader from "./TabHeader";
import { ContainerScroll, Follow} from "./style";
import { Flex } from "../../../styles";
import { useNavigate } from "react-router-dom";

function FollowersContainer() {
  const navigate = useNavigate();
  const { followers } = useContext(UserDataContext);
  const { setEmptyState } = useContext(UserDataContext);

  const handleUser = (user: string) => {
    setEmptyState();
    navigate(`/user/${user.toLowerCase()}`);
  }

  return (
    <>
      <TabHeader tab={"Followers"} />
      {followers.length === 0 && <h3>The user has no followers!</h3>}
      {followers && (
        <ContainerScroll>
          <Flex dir="column" justify="center" align="flex-start">
            {followers.map((follow, index) => {
              return (
                <Follow key={index} onClick={()=> {handleUser(follow.login)}}>
                  <img src={follow.avatar_url} alt="" />
                  {follow.login}
                </Follow>
              );
            })}
          </Flex>
        </ContainerScroll>
      )}
    </>
  );
}

export default FollowersContainer;