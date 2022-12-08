import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext";
import TabHeader from "./TabHeader";
import { ContainerScroll, Follow} from "./style";
import { Flex } from "../../../styles";
import { useNavigate } from "react-router-dom";

function FollowingContainer() {
  const navigate = useNavigate();
  const { following } = useContext(UserDataContext);
  const { setEmptyState } = useContext(UserDataContext);

  const handleUser = (user: string) => {
    setEmptyState();
    navigate(`/user/${user.toLowerCase()}`);
  }

  return (
    <>
      <TabHeader tab={"Following"} />
      {following.length === 0 && <h3>The user follows no one!</h3>}
      {following && (
        <ContainerScroll>
          <Flex dir="column" justify="center" align="flex-start">
            {following.map((follow, index) => {
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

export default FollowingContainer;