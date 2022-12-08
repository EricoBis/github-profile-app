import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext";
import { Header } from "./style";

type TabType ={
    tab: string,
}

function TabHeader( {tab}: TabType) {
  const { userData } = useContext(UserDataContext);

  return (
    <Header>{`${tab} - ${userData.login}`}</Header>
  )
}

export default TabHeader