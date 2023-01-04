import React from "react"; // Import the React library
import Title from "../components/Title"; // Import the Title component from the "../components/Title" directory

function Children({ user }) {
  return (
    <div>
      <Title title="CHILDREN" number={user.children.length} />
      <div className="d-flex justify-content-around">
        {user.children.map((child) => {
          return (
            <div>
              <img src={child.avatar} alt="avatar" data-testid="child-avatar"/>
              <p>First name : {child.firstName}</p>
              <p>Gender : {child.gender}</p>
              <p>Birthday : {child.birthday}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Children;
