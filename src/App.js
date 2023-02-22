import "./App.css";
import { Outlet } from "react-router-dom";
import Navigate from "./components/Navigate";

function App() {
  return (
    <>
      <Navigate />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
