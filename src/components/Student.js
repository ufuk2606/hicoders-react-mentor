import React from "react";

function Student({ personList }) {
  return (
    <div className="bg-dark p-3 mt-3" style={{ width: "40%" }}>
      <h3 className="text-decoration-underline text-white">Student List</h3>
      {personList
        .filter((person) => person.profession === "Student")
        .map((person) => (
          <p data-testid="student-list" className="text-danger">
            I am a Student, my name is {person.name}
          </p>
        ))}
    </div>
  );
}

export default Student;
