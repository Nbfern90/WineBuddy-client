import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaWineBottle,
} from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    if (loggedUser._id) {
      dispatch(logout());
      dispatch(reset());
    }
  };

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">
      <div className="logo">
        <GiGrapes className="grape-icon" />
        <Link to="/">Wine Buddy</Link>
      </div>

      <ul>
        {user ? (
          <>
            <li>
              <Link to={"/users/" + loggedUser._id}>
                <FaWineBottle /> My Wines
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="logOut" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
