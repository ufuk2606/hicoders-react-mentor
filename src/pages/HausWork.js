import React from "react";
import { useEffect, useState } from "react";

function HausWork() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState();

  const getUsers = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setUsers(data.slice(0, 10));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="d-flex flex-wrap mx-5">
        {users?.map((user) => {
          return (
            <div className="bg-warning m-5 rounded-5" style={{ width: "300px", height: "400px" }}>
              <div className="m-auto">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  className="rounded-5 ms-5"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <button className="bg-danger ms-5 text-white rounded-3 px-3 border-danger mb-2">
                Contact
              </button>
              <div className="mx-5 text-white">
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <p>{user?.website}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HausWork;