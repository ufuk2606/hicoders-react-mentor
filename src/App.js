import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
//1-Reach fetch API and convert movies to json format
//2-confirm effect action when movies are called
//3-Get the input values with the handleClick function and send them to the set
//4-render movies

const App = () => {
  //-----------useState und const part
  const [movie, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const key = "a5d5dea6";
  const api = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${key}`;
  const [isDarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) ?? false
  );

  const style = isDarkMode
    ? "container-fluid bg-dark text-muted"
    : "container-fluid bg-light text-muted";

  //----------- useEffect part
  useEffect(() => {
    //-------confirm effect action when movies are called
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieTitle]);
  //------------Reach fetch API and convert movies to json format
  const getMovieList = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  //-----------Get the input values with the hadleclick function and send them to the set
  const HandleClickEvent = (e) => {
    e.preventDefault();
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  //------------render movies
  return (
    <div className={style} style={{ height: "100%", minHeight: "100vh" }}>
      <h1>Movies</h1>
      <form onSubmit={HandleClickEvent}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Search
          </button>
        </div>
      </form>
      <div className="row">
        <div className="col-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleDarkMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Dark Mode
              </label>
            </div>
        </div>
        <div className="col-9">
          <Movie movie={movie} />
        </div>
      </div>
    </div>
  );
};
export default App;
