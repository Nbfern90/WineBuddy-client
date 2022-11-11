import React from "react";
import AllUsers from "./AllUsers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="dashboard">
      <div className="vineyard"></div>
      <div className="about">
        <h2>Love Wine?</h2>
        <h3>Tell Us About It!</h3>
        <p>
          Wine buddy is a place where members can keep track and share wines
          they've tasted, while discovering new wines to try.
        </p>
      </div>
      <hr />
      <h1>Members</h1>
      <hr />
      <div>
        {user ? (
          <Link to="/addwine" className="addWine">
            Add A Wine
          </Link>
        ) : null}
      </div>
      <br />
      <AllUsers />
    </div>
  );
};

export default Dashboard;
