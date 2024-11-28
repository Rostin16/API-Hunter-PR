import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img
          src={movie.poster || "https://www.movieposterdb.com/the-dark-knight-i468569"} 
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Year: {movie.year}</p>
          <p className="card-text">Rating: {movie.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
