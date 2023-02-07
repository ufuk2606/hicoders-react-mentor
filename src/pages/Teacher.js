import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { PersonContext } from "../contexts/PersonContext";

function Teacher() {
  const { Data } = useContext(PersonContext);
  const teacherList = Data.filter((person) => person.profession === "teacher");
  return (
    <div>
      <Navbar />
      <h3 data-testid="title-Teacher">Teacher List</h3>
      <br />
      <ol>
        {teacherList.map((teacher, index) => (
          <li key={index} className="m-0">
            <p className="m-0">
              {teacher.firstName} {teacher.lastName}
            </p>
            <p className="m-0">Profession: {teacher.subject}</p>
            <p className="m-0">EMail: {teacher.email}</p>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Teacher;
