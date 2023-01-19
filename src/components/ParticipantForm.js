import React, { useState } from "react";
import swal from "sweetalert2";

function ParticipantForm({ postData }) {
  // TIP;
  //1.create a form
  //2.store the user input in some kind of state
  //3.implement the POST request when you submit the form
  //4.You can retrieve the data again using the 'getData' function after you've added a new user, so that you can see the new user immediately on the screen.

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    if (firstName !== "" && lastName !== "" && email !== "") {
      postData(data);
      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      swal("Please enter all of information!");
    }
  };

  return (
    <>
      <h1>Add participant</h1>
      {/* form.....*/}
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          className="rounded-3 w-100 mb-3"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          className="rounded-3 w-100 mb-3"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          className="rounded-3 w-100 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <button  type="submit" className="rounded-3">
          Submit
        </button>
      </form>
    </>
  );
}
export default ParticipantForm;
