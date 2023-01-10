import "./App.css";
import PersonInformation from "./components/PersonInformation";
import { useState } from "react";
import person from "./person.json";

function App() {
  const [personList, setPersonList] = useState(person);

  return (
    <div className="container">
      <div className="row mt-5">
        <PersonInformation personList={personList}></PersonInformation>
      </div>
    </div>
  );
}

export default App;
