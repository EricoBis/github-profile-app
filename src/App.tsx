import { Outlet } from "react-router-dom";
import { UserDataProvider } from "./contexts/UserDataContext";
import GlobalStyle from "./styles";

function App() {
  return (
    <div className="github-profile-app">
      <UserDataProvider>
      <GlobalStyle />
      <Outlet />
      </UserDataProvider>
    </div>
  );
}

export default App;
