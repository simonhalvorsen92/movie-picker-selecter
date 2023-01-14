import { useEffect, useState } from "react";
import Movies from "../../models/Movies";
import AddOneToList from "../AddOneToList";
import MovieListAdd from "../MovieList";
import MovieListTitle from "../MovieListTitle";
import SearchBox from "../SearchBox";

import { Grid } from "@mui/material";
import MovieList from "../MovieList";

const UserVy = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [favourites, setFavourites] = useState<Movies[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (seachValue: any) => {
    const url = `http://www.omdbapi.com/?s=${seachValue}&apikey=de9c0cdf`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log("vad får vi för response", responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem(
  //     "react-movie-app-my-favourites",
  //     JSON.stringify(movies)
  //   );
  // }, [movies]);

  // localStorage.setItem("items", JSON.stringify(movies));
  useEffect(() => {
    getMovieRequest(searchValue);
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

  // const removeMovie = (movie: Movies) => {
  //   const newMovieList = usersWatchList.filter(
  //     (usersWatchList) => usersWatchList.imdbID !== movie.imdbID
  //   );
  //   setUsersWatchList(newMovieList);
  //   saveToLocalstorage(newMovieList);
  // };
  return (
    <>
      <Grid>
        user vy
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <Grid>
          <MovieListTitle title={"Filmer"} />
        </Grid>
        <Grid container direction={"row"} justifyContent={"center"}>
          <MovieList
            movies={movies}
            onClickAddOrRemove={addFavouriteMovie}
            AddOrRemoveFromList={AddOneToList}
          />
        </Grid>
        {/* <Grid>
          <MovieListTitle title={"Min Lista med filmer"} />
        </Grid>
        <Grid>
          <MovieListRemove
            usersList={usersWatchList}
            onClickAddOrRemove={removeMovie}
            AddOrRemoveFromList={RemoveOneFromList}
          />
        </Grid> */}
      </Grid>
    </>
  );
};

export default UserVy;
