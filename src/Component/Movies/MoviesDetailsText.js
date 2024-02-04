import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import RatingStars from "react-rating-stars-component";

const MoviesDetailsText = ({moveDetailis}) => {
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
  return (
    <div>
      <div className="move_info  mt-3">
        <h3 className="title text-center my-3">{moveDetailis.title}</h3>
        <p className="sub_title">
          <span className="title fs-6">original_title:</span>{" "}
          {moveDetailis.original_title}
        </p>
        <p className="sub_title">
          <span className="title fs-6">popularity: </span>
          {moveDetailis.popularity}{" "}
        </p>
        <p className="sub_title">
          <span className="title fs-6">release_date: </span>{" "}
          {moveDetailis.release_date}
        </p>
        <p className="sub_title">
          <span className="title fs-6">vote_count: </span>
          {moveDetailis.vote_count}
        </p>
        <p className="sub_title">
          <span className="title fs-6">overview:</span> {moveDetailis.overview}
        </p>
      </div>
      <div className="">
        <RatingStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color="#ffd700"
          value={4.5}
          edit={true}
          isHalf={true}
          activeColor="ffd700"
        />
      </div>
      <div className="my-5 d-flex justify-content-center align-items-center">
        <a href={moveDetailis.homepage}>
          <Button className="btn-search me-3">View Movie</Button>
        </a>
        <a href="/">
          <Button className="btn-search ms-3">GO Home</Button>
        </a>
      </div>
    </div>
  );
};

export default MoviesDetailsText;
