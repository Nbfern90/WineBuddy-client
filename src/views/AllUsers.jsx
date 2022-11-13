import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wine-buddy-api.onrender.com/api/users/all`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        {users.map((users, i) => (
          <p key={i}>
            <Link to={"/users/" + users._id} className="members">
              {users.userName}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
