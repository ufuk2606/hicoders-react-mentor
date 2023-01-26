import { useState, useEffect } from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantTable from "./components/ParticipantTable";
import BASE_URL from "./config/config";



function App() {
  const [participants, setParticipants] = useState([]); // used to store the data received from the API request

  const getData = async () => {
    // getData makes an HTTP GET request to the Hicoders-API to get all existing participants, because of that it is an asynchronous function
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postData = async (data) => {
    const newPerson = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    };
    await fetch(BASE_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    getData();
  };
  //it is a good idea to fetch the data in app.js so every component has access to the fetched data

  return (
    <div className="App m-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12  text-start ">
            <ParticipantForm postData={postData} />
          </div>
          <div className="col-lg-7  col-12">
            <ParticipantTable participants={participants} getData={getData}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
