import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import SavedList from "./Movies/SavedList";

import MovieList from "./Movies/Movie";
import Movie from "./Movies/MovieList";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <div>
        <Link to="/">MovieList </Link>
        <Link to="/movies/"> Movie </Link>
      </div>

      <Switch>
        <Route>
          <MovieList path="/" />
        </Route>
        <Route path="/movies/">
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}
