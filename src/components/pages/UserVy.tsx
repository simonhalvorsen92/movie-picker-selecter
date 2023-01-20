import { useEffect, useState } from "react";
import Movies from "../../models/Movies";
import AddOneToList from "../AddOneToList";

import SearchBox from "../SearchBox";

import { Grid } from "@mui/material";
import MovieList from "../MovieList";

async function getMovieRequest(seachValue: string, setMovies: Function) {
  const url = `http://www.omdbapi.com/?s=${seachValue}&apikey=de9c0cdf`;
  const response = await fetch(url);
  const responseJson = await response.json();
  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
}

const UserVy = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [favourites, setFavourites] = useState<Movies[]>([]);
  const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   localStorage.setItem(
  //     "react-movie-app-my-favourites",
  //     JSON.stringify(movies)
  //   );
  // }, [movies]);

  // localStorage.setItem("items", JSON.stringify(movies));
  useEffect(() => {
    getMovieRequest(searchValue, setMovies);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-my-favourites") || ""
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items: object) => {
    localStorage.setItem(
      "react-movie-app-my-favourites",
      JSON.stringify(items)
    );
  };

  const addFavouriteMovie = (movie: Movies) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <Grid width={"100%"} height={"100vh"}>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <Grid></Grid>
        <Grid container direction={"row"} justifyContent={"center"}>
          <MovieList
            movies={movies}
            onClickAddOrRemove={addFavouriteMovie}
            AddOrRemoveFromList={AddOneToList}
          />
        </Grid>
      </Grid>
    </>
  );
};

export { getMovieRequest, UserVy };
