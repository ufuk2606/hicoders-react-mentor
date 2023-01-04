import React,{useState} from 'react'
import "./App.css";
import { Col, Container, Row } from "reactstrap";
import Person from "./sections/Person";
import Children from "./sections/Children";
import Friends from "./sections/Friends";
import {person} from './data/person'

function App() {
  // Initialize the user state variable with the value of the person --object--
  const [user] = useState(person)

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light border">
            <Person user={user}/>
          </Col>
          <Col md={10} className="bg-light border">
            <Children  user={user}/>
            <Friends user={user}/>  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
