import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { PersonContext } from "../contexts/PersonContext";

function Student() {
  const { Data } = useContext(PersonContext);
  const studentList = Data.filter((person) => person.profession === "student");
  return (
    <div>
      <Navbar />
      <h3 data-testid="title-Student">Student List</h3>
      <br />
      <ol>
        {studentList.map((student, index) => (
          <li key={index} className="m-0">
            <p className="m-0">
              {student.firstName} {student.lastName}
            </p>
            <p className="m-0">Profession: {student.profession}</p>
            <p className="m-0">EMail: {student.email}</p>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Student;
