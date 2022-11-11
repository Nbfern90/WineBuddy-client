import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersWine from "./views/UsersWine";
import CreateWine from "./views/CreateWine";
import OneWine from "./views/OneWine";
import EditWine from "./views/EditWine";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const userAuth = () => {
    const userToken = JSON.parse(localStorage.getItem("user"));

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${userToken.token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
  return (
    <div className="container gx-0">
      <Header />
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<UsersWine />} path="/users/:id" />
        <Route element={<CreateWine userAuth={userAuth} />} path="/addwine" />
        <Route element={<OneWine />} path="/wine/:wine_id" />
        <Route
          element={<EditWine userAuth={userAuth} />}
          path="/wine/edit/:wine_id"
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
