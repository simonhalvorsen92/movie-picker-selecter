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
      setUsersListRating(responseJson.Search);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem(
  //     "react-movie-app-my-list-rating",
  //     JSON.stringify(usersListRating)
  //   );
  // }, [usersListRating]);

  // localStorage.setItem(
  //   "react-movie-app-my-list-rating",
  //   JSON.stringify(usersListRating)
  // );
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
      <Grid>
        <SearchBox
          searchValue={searchValueRating}
          setSearchValue={setSearchValueRating}
        />
        <Grid>
          <MovieListTitle title={"Filmer att ranka"} />
        </Grid>
        <Grid container direction={"row"} justifyContent={"center"}>
          <MovieRatedList
            usersListRating={usersListRating}
            onClickRateMovie={addMovieToListrating}
            AddOrRemoveFromList={AddOneForRating}
          />
        </Grid>

        <Grid>
          <MovieListTitle title={"Min Lista med betygastta filmer"} />
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
