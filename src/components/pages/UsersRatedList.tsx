import { useEffect, useState } from "react";
import MoviesRating from "../../models/Rating";
import MovieListTitle from "../MovieListTitle";
import SearchBox from "../SearchBox";

import { Grid } from "@mui/material";
import MovieRatedList from "../MovieRatedList";
import AddOneForRating from "../AddOneForRating";
import MovieListRemove from "../MovieListRemove";
import RemoveOneFromList from "../RemoveOneFromList";
import MovieRatedRemove from "../MovieRatedRemove";
import RemoveOneRatedList from "../RemoveOneRatedList";
import BasicRating from "../Rating";
const LOCOL_STORAGES_KEY = "starSelected";

const UsersRatedList = () => {
  const [usersListRating, setUsersListRating] = useState<MoviesRating[]>([]);
  const [searchValueRating, setSearchValueRating] = useState("");
  const [usersWatchListRating, setUsersWatchListRating] = useState<
    MoviesRating[]
  >([]);
  const getMovieRequest = async (seachValue: string) => {
    const url = `http://www.omdbapi.com/?s=${seachValue}&apikey=de9c0cdf`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("vad får vi för response", responseJson);
    if (responseJson.Search) {
      responseJson.Search.map((movie: MoviesRating) => {
        return { ...movie, rating: 0 };
      });
      setUsersListRating(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValueRating);
  }, [searchValueRating]);
  useEffect(() => {
    const movieListLocalStorageRating = JSON.parse(
      localStorage.getItem("react-movie-app-my-list-rating") || ""
    );
    setUsersWatchListRating(movieListLocalStorageRating);
  }, []);

  const saveToLocalstorage = (items: object) => {
    localStorage.setItem(
      "react-movie-app-my-list-rating",
      JSON.stringify(items)
    );
    console.log(items);
  };
  const removeMovie = (movie: MoviesRating) => {
    const newMovieList = usersWatchListRating.filter(
      (usersWatchListRating) => usersWatchListRating.imdbID !== movie.imdbID
    );
    setUsersWatchListRating(newMovieList);
    saveToLocalstorage(newMovieList);
  };
  const addMovieToListrating = (movie: MoviesRating) => {
    const newMovieListRating = [...usersWatchListRating, movie];
    setUsersWatchListRating(newMovieListRating);
    saveToLocalstorage(newMovieListRating);
  };
  return (
    <>
      <Grid width={"100%"} height={"100vh"}>
        <SearchBox
          searchValue={searchValueRating}
          setSearchValue={setSearchValueRating}
        />

        <Grid container direction={"row"} justifyContent={"center"}>
          <MovieRatedList
            usersListRating={usersListRating}
            onClickRateMovie={addMovieToListrating}
            AddOrRemoveFromList={AddOneForRating}
          />
        </Grid>

        <Grid>
          <MovieListTitle title={"Vad jag tycker om dessa filmer"} />
        </Grid>
        <Grid container direction={"row"} justifyContent={"center"}>
          <MovieRatedRemove
            usersListRating={usersWatchListRating}
            onClickAddOrRemove={removeMovie}
            AddOrRemoveFromList={RemoveOneRatedList}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UsersRatedList;
