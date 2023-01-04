import React from "react";
import Title from "../components/Title";

function Person({ user }) {
  return (
    <div>
      <Title title="PERSON"/>
      <img src={user.avatar} alt="avatar"/>
      <h5>Your profil</h5>
      <p>First name : {user.first_name}</p>
      <p>Last name : {user.last_name}</p>
      <p>Address : {user.address}</p>
      <p>Gender : {user.gender}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default Person;
