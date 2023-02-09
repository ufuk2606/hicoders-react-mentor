import React from "react";
import UpdateIcon from "../UpdateIcon";
import TrashIcon from "../TrashIcon";

function ParticipantTable({ participants, handleDelete, handleUpdate, setId, editButtonClick }) {

  const handleClickUpdate = (pParticipent) => {
    setId(pParticipent.id);
    editButtonClick(pParticipent);

  }

  return (
    <>
      <table className="text-light  table  table-hover table-bg table-bordered  table-responsive" >
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
          {participants.map((participant) => (
            <tr key={participant.id}>
              <th scope="row">{participant.id}</th>
              <td>{participant.first_name}</td>
              <td>
                {participant.last_name}
              </td>
              <td>{participant.email}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(participant.id)}
                >
                  <TrashIcon />
                </button>
                <button onClick={() => handleClickUpdate(participant)}>
                  <UpdateIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ParticipantTable;