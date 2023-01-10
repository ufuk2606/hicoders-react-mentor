import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";
import { useState } from "react";

function PersonInformation({ personList }) {
  const [isShowStudents, setIsShowStudents] = useState(true);
  const [isShowTeachers, setIsShowTeachers] = useState(true);
  const handleClickStudents = () => {
    setIsShowStudents(!isShowStudents);
  };
  const handleClickTeachers = () => {
    setIsShowTeachers(!isShowTeachers);
  };

  return (
    <div>
      <div>
        <button data-testid="button-students" onClick={handleClickStudents} className="btn btn-dark mx-3">
          {isShowStudents ? ' Show Students' : ' Hide Students'}
        </button>
        <button data-testid="button-teachers" onClick={handleClickTeachers} className="btn btn-danger mx-3">
          {isShowTeachers ? 'Show Teachers' : 'Hide Teachers'}
        </button>
      </div>
      <div className="d-flex">
        {!isShowStudents ? <Student personList={personList} /> : ""}
        {!isShowTeachers ? <Teacher personList={personList} /> : ""}
      </div>
    </div>
  );
}

export default PersonInformation;
