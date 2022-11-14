import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UsersWine = () => {
  const { user } = useSelector((state) => state.auth);
  const [wines, setWines] = useState([]);
  const [userName, setUserName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://wine-buddy-api.onrender.com/api/wine/${id}`)
      .then((res) => setWines(res.data))
      .catch((err) => console.log(err));
  }, [wines, setWines, id]);

  useEffect(() => {
    axios
      .get(`https://wine-buddy-api.onrender.com/api/users/all/${id}`)
      .then((res) => setUserName(res.data))
      .catch((err) => console.log(err));
  }, [userName, setUserName, id]);
  return (
    <div className="usersWineContainer">
      <h1>{userName.userName}'s Wines</h1>
      <div>
        {user ? (
          <Link to="/addwine" className="addWine">
            Add A Wine
          </Link>
        ) : null}
      </div>
      {wines.map((wines, i) => (
        <div key={i}>
          <Link to={"/wine/" + wines._id} className="usersWines">
            <p>
              {wines.name} {wines.year}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsersWine;
