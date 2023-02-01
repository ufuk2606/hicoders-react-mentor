import React from "react";
import "./navbar.css";
import Navbar from "./components/Navbar";
import { Table } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar />
      <h1 data-testid="about_uns">About Us</h1>
      <div className="d-flex mt-5 justify-content-around mb-5">
        <div className="ms-5 w-50">
          <h2>History</h2>
          <details>
            <summary>More Info</summary>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </details>
        </div>
        <div>
          <img
            className="rounded-5 shadow-3 me-5"
            alt=""
            src="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?b=1&s=170667a&w=0&k=20&c=oFtP564Ykvak2VIyM1OUb29daY5S4uqsmT3j3_8QgfQ="
            style={{ width: "30rem", height: "30rem" }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-center">Our Team</h2>
        <div className="w-75 m-auto ">
          <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
