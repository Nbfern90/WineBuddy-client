import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateWine = ({ userAuth }) => {
  const [wine, setWine] = useState({
    name: "",
    winery: "",
    country: "",
    region: "",
    year: "",
    grapes: "",
    alcoholContent: "",
    rating: "",
    tastingNotes: "",
    img: "",
  });
  const {
    name,
    winery,
    country,
    region,
    year,
    grapes,
    alcoholContent,
    rating,
    tastingNotes,
    img,
  } = wine;
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setWine({
      ...wine,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    userAuth();

    axios
      .post("https://wine-buddy-api.onrender.com/api/wine", wine)
      .then((res) => console.log(res))
      .then(navigate("/"))
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return setErrors(message);
      });
  };
  return (
    <div>
      <section className="heading">
        <h1>Add A Wine</h1>
        <p>{errors}</p>
      </section>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name of Wine: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="winery">Name of Winery: </label>
            <input
              type="text"
              className="form-control"
              id="winery"
              name="winery"
              value={winery}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country of Origin: </label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={country}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="region">Region of Production: </label>
            <input
              type="text"
              className="form-control"
              id="region"
              name="region"
              value={region}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year of Production: </label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              value={year}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grapes">Grape(s): </label>
            <input
              type="text"
              className="form-control"
              id="grapes"
              name="grapes"
              value={grapes}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="alcoholContent">Alcohol %: </label>
            <input
              type="number"
              max="50"
              step=".1"
              className="form-control"
              id="alcoholContent"
              name="alcoholContent"
              value={alcoholContent}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">How Would You Rate the Wine? </label>
            <input
              type="number"
              className="form-control"
              min="1"
              max="5"
              step=".1"
              id="rating"
              name="rating"
              value={rating}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tastingNotes">Tasting Notes/Comments: </label>
            <textarea
              type="text"
              className="form-control"
              id="tastingNotes"
              name="tastingNotes"
              value={tastingNotes}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Image URL: </label>
            <input
              type="text"
              className="form-control"
              id="img"
              name="img"
              value={img}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group-btn">
            <button type="submit" className="btn  btn-primary">
              Submit
            </button>
            <Link to={"/"}>
              <button className="btn btn-danger">Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateWine;
