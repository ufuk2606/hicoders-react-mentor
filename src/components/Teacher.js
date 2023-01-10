import React from "react";

function Teacher({ personList }) {
  return (
    <div className="bg-danger p-3 mt-3 mx-3" style={{ width: "40%" }}>
      <h3 className="text-decoration-underline text-white">Teachers List</h3>
      <div data-testid="teacher">
        {personList
          .filter((person) => person.profession === "Teacher")
          .map((person) => (
            <p data-testid="teacher-list">
              I am a Teacher, my name is {person.name}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Teacher;
