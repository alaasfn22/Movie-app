import React from "react";
import "./MoviesCard.css";
import {faStar, faStarHalfStroke} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
const MoviesCard = ({mov}) => {
  const handelClicK = (e) => {
    // window.location.reload()
  };
  return (
    <div onClick={(e) => handelClicK()} className="m-0 p-0 ">
      <Link to={`/details/${mov.id}`} style={{textDecoration: "none"}}>
        <div className="movie_content rounded-4 overflow-hidden  m-0 p-0 py-2">
          <div className="img_box overflow-hidden d-flex justify-content-between align-items-center rounded-3  pt-4 ">
            <img
              src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
              alt=""
              className="img-fluid rounded-3"
            />
            <div className="ratio_box  mx-auto">
              <p>
                <FontAwesomeIcon icon={faStar} />
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} />
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} />
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} />
              </p>
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
          </div>
          <div className="movie_info mt-3">
            <h3 className="mov_title  ">{mov.original_title}</h3>
            <span className="">
              <FontAwesomeIcon icon={faStarHalfStroke} className="ratio_box" />{" "}
              <p className="d-inline-block">{mov.vote_average}</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesCard;
