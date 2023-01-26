import React from "react";
import TrashIcon from "../TrashIcon";
import Swal from "sweetalert2";
import BASE_URL from "../config/config";

function ParticipantTable({ participants, getData }) {
  //// TIP;
  ////display users firstname ,lastname and email here
  ///add a button that handles the DELETE request
  ///delete users by their id
  ///You can retrieve the updated data by calling the 'getData' function after you've deleted a user from the table

  const deleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const urlWithId = `${BASE_URL}/${id}`;
          fetch(urlWithId, {
            method: "DELETE",
          }).then(() => {
            getData();
          });
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const participant = participants.map((participant) => {
    return (
      <tr key={participant.id}>
        <td>{participant.id}</td>
        <td>{participant.first_name}</td>
        <td>{participant.last_name}</td>
        <td>{participant.email}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger delete"
            onClick={() => deleteData(participant.id)}
          >
            <TrashIcon />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="text-light  table  table-hover table-bg table-bordered  table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* participants...*/}
        {participant}
      </tbody>
    </table>
  );
}
export default ParticipantTable;
