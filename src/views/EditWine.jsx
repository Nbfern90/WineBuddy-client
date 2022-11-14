import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement("#root");

const EditWine = ({ userAuth }) => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { wine_id } = useParams();
  const [openModal, setOpenModal] = useState(false);
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

  useEffect(() => {
    axios
      .get(`https://wine-buddy-api.onrender.com/api/wine/one/${wine_id}`)
      .then((res) => setWine(res.data))
      .catch((err) => console.log(err));
  }, [wine_id]);

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
      .put(`https://wine-buddy-api.onrender.com/api/wine/one/${wine_id}`, wine)
      .then((res) => console.log(res))
      .then(navigate(`/wine/${wine_id}`))
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

  const toggleModal = () => {
    if (openModal === false) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  const deleteHandler = () => {
    userAuth();

    axios
      .delete(`https://wine-buddy-api.onrender.com/api/wine/one/${wine_id}`)
      .then(navigate("/users/" + wine.user))
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
        <h1>Edit Wine</h1>
        <p>{errors}</p>
      </section>

      <section>
        <button onClick={toggleModal} className="btn btn-danger mb-2">
          Delete This Wine
        </button>
        <Modal
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, .95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          isOpen={openModal}
          className="modal-box"
        >
          <h2>Are you sure you wish to delete this wine?</h2>
          <div className="btn-box">
            <button onClick={deleteHandler} className="btn btn-primary">
              Delete
            </button>
            <button onClick={toggleModal} className="btn btn-danger">
              Cancel
            </button>
          </div>
        </Modal>
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
            <button type="submit" className="btn btn-block btn-primary">
              Update
            </button>
            <Link to={"/"}>
              <button className="btn btn-block btn-danger">Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditWine;
