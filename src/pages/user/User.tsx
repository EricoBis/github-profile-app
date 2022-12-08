import { useEffect, useContext, useState } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";
import { BsGithub } from "react-icons/bs";
import { useParams, useSearchParams } from "react-router-dom";

import UserInput from "../../components/input/UserInput";
import UserContainer from "../../components/user/UserContainer";
import ReposContainer from "../../components/user/tab/ReposContainer";

import Loading from "../../components/loading/loading";
import { Center } from "../../styles";
import { IconLink, MainContainer } from "./style";
import { Header } from "./style";

import { Octokit } from "octokit";
import FollowersContainer from "../../components/user/tab/FollowersContainer";
import FollowingContainer from "../../components/user/tab/FollowingContainer";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

const TAB = {
  followers: "followers",
  following: "following",
  repos: "repos",
};

function User() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const { userData, setUserData, setUserRepos, setFollowers, setFollowing } =
    useContext(UserDataContext);

  const { login } = useParams();
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

  useEffect(() => {
    setRemoveLoading(false);
    getData();
  }, [login]);

  const getData = async () => {
    try {
      const userRes = await octokit.request("GET /users/{user}", {
        user: login,
      });
      const reposRes = await octokit.request("GET /users/{user}/repos", {
        user: login,
      });
      const followers = await octokit.request("GET /users/{user}/followers", {
        user: login,
      });
      const following = await octokit.request("GET /users/{user}/following", {
        user: login,
      });
      setFollowers(followers.data);
      setFollowing(following.data);
      setUserData(userRes.data);
      setUserRepos(reposRes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setRemoveLoading(true);
    }
  };

  return (
    <Center>
      <MainContainer>
        <Header>
          <IconLink to="/">
            <BsGithub />
          </IconLink>
          <UserInput />
        </Header>
        {removeLoading ? (
          userData.login && (
            <>
              {!tabParam && <UserContainer />}
              {tabParam === TAB.repos && <ReposContainer />}
              {tabParam === TAB.followers && <FollowersContainer />}
              {tabParam === TAB.following && <FollowingContainer />}
            </>
          )
        ) : (
          <Loading />
        )}
      </MainContainer>
    </Center>
  );
}

export default User;
