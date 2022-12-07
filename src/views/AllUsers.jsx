import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://wine-buddy-api.onrender.com/api/users/all`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader
          color={"#550A1E"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          {users.map((users, i) => (
            <p key={i}>
              <Link to={"/users/" + users._id} className="members">
                {users.userName}
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
