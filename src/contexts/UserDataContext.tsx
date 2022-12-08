import { createContext, ReactNode, useState } from "react";

export type UserType = {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
};

export type FollowType = {
  avatar_url: string;
  login: string;
};

export const initialUser: UserType = {
  avatar_url: "",
  login: "",
  name: "",
  location: "",
  bio: "",
  public_repos: 0,
  followers: 0,
  following: 0,
};

export type ReposType = {
  name: string;
  html_url: string;
};

type UserDataContextProps = {
  children: ReactNode;
};

type UserDataContextType = {
  userData: UserType;
  userRepos: ReposType[];
  followers: FollowType[];
  following: FollowType[];
  setUserData: (data: UserType) => void;
  setUserRepos: (repos: ReposType[]) => void;
  setFollowers: (users: FollowType[]) => void;
  setFollowing: (users: FollowType[]) => void;

  setEmptyState: () => void;
};

const initialValue: UserDataContextType = {
  userData: {} as UserType,
  userRepos: [],
  setUserData: () => {},
  setUserRepos: () => {},
  setEmptyState: () => {},
  followers: [],
  following: [],
  setFollowers: () => {},
  setFollowing: () => {},

};

export const UserDataContext = createContext<UserDataContextType>(initialValue);

export const UserDataProvider = ({ children }: UserDataContextProps) => {
  const [userData, setUserData] = useState(initialUser);
  const [userRepos, setUserRepos] = useState([] as ReposType[]);
  const [followers, setFollowers] = useState([] as FollowType[]);
  const [following, setFollowing] = useState([] as FollowType[]);

  const setEmptyState = () => {
    setUserData(initialUser);
    setUserRepos([]);
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        userRepos,
        setUserRepos,
        setEmptyState,
        followers,
        following,
        setFollowers,
        setFollowing,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
