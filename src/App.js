import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import "./index.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="text-white d-flex justify-content-center align-items-center vh-100">
          <div>
            <Profile />
            <Logout />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
