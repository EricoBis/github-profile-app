import { useContext } from "react";
import { UserDataContext, UserType } from "../../contexts/UserDataContext";

import {
  LinkContainer,
  Img,
  Login,
  Name,
  Bio,
  Location,
} from "./style";
import { Flex } from "../../styles";
import { MdOutlineLocationOn } from "react-icons/md";

function UserContainer() {
  const { userData } = useContext(UserDataContext);
  const {
    name,
    login,
    bio,
    avatar_url,
    location,
    followers,
    following,
    public_repos,
  } = userData;

  return (
    <>
      <Img src={`${avatar_url}`} />
      {name && <Name>{name}</Name>}
      <Login>{login}</Login>
      {bio && <Bio>{bio}</Bio>}
        {location && (
          <Location>
            <MdOutlineLocationOn />
            <p>{location}</p>
            </Location>
        )}
      <Flex dir="row" justify="space-around" align="center">
      <LinkContainer to={`/user/${login.toLowerCase()}?tab=repos`}>
          {public_repos}
          <p>repositories</p>
        </LinkContainer>
        <LinkContainer to={`/user/${login.toLowerCase()}?tab=followers`}>
          {followers}
          <p>followers</p>
        </LinkContainer>
        <LinkContainer to={`/user/${login.toLowerCase()}?tab=following`}>
          {following}
          <p>following</p>
        </LinkContainer>
      </Flex>
    </>
  );
}

export default UserContainer;
