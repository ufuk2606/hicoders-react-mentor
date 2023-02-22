import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <NavLink className="mx-5 text-decoration-none" to="Products">
        <button className="btn-login">Welcome to shopping app</button>
      </NavLink>
    </div>
  );
}

export default Home;
