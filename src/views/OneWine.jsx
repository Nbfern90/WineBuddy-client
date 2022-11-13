import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const OneWine = () => {
  const [wine, setWine] = useState({});
  const { wine_id } = useParams();

  const userToken = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`/api/wine/one/${wine_id}`)
      .then((res) => setWine(res.data))
      .catch((err) => console.log(err));
  }, [wine_id]);
  return (
    <div className="oneWineContainer">
      <h1>{wine.name}</h1>
      <div className="card mb-3 border-0">
        <div className="row align-items-center g-0">
          <div className="col-md-4">
            <img
              src={wine.img}
              class="img-fluid rounded-start bottleImg"
              alt="Not Avaiable"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">Winery: {wine.winery}</p>
              <p className="card-text">Country of Origin: {wine.country}</p>
              <p className="card-text">Region: {wine.region}</p>
              <p className="card-text">Vintage: {wine.year}</p>
              <p className="card-text">Grape(s): {wine.grapes}</p>
              <p className="card-text">Alc%: {wine.alcoholContent}%</p>
              <p className="card-text">Rating: {wine.rating} out of 5</p>
              <p className="card-text">{wine.tastingNotes}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {userToken && userToken._id === wine.user ? (
          <Link to={`/wine/edit/${wine_id}`}>
            <button className="btn btn-primary mx-auto">Edit This Wine</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

/*<div className="card">
        <ul>
          <li>Winery: {wine.winery}</li>
          <li>Country of Origin: {wine.country}</li>
          <li>Region: {wine.region}</li>
          <li>Vintage: {wine.year}</li>
          <li>Grape(s): {wine.grapes}</li>
          <li>Alc%: {wine.alcoholContent}%</li>
          <li>Rating: {wine.rating} out of 5</li>
          <li>Tasting Notes: {wine.tastingNotes}</li>
          <img src={wine.img} alt="Not Available" width="100" height="250" />
        </ul>
      </div> */

export default OneWine;
