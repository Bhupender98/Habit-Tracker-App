import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar mb-4">
      <nav
        className="navbar navbar-light justify-content-between"
        style={{ backgroundColor: "#00000" }}
      >
        <Link to="/" className="navbar-danger m-2 ms-5">
          {" "}
          <h2>Health-Tracker</h2>
        </Link>
        <form action="" className="form-inline">
          <Link
            to="/add-habit"
            className="btn btn-outline-success me-5 my-sm-0 m-2"
            type="submit"
          >
            Add Habits
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
