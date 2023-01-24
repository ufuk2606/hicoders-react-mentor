import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="col">
      <div className="d-flex flex-wrap justify-content-center">
        {movie?.map((movie, index) => {
          return (
            <div
              key={index}
              className="card mx-3 my-2"
              style={{ width: "18rem" }}
            >
              <img
                src={movie?.Poster}
                className="card-img-top m-auto p-3 "
                height="350px"
                alt={movie?.Title}
              />
              <div className="m-2">
                <h6 className="card-title">{movie?.Title}</h6>
                <p>Type: {movie?.Type}</p>
                <hr />
                <p>{movie?.Year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Movie;
