import { useEffect, useState } from "react";
import Movies from "../../models/Movies";

import MovieListTitle from "../MovieListTitle";

import RemoveOneFromList from "../RemoveOneFromList";
import MovieListRemove from "../MovieListRemove";
import { Grid } from "@mui/material";
import MovieRatedList from "../MovieRatedList";
import AddOneForRating from "../AddOneForRating";
import Rating from "../Rating";

const UsersList = () => {
  const [usersList, setUsersList] = useState<Movies[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [usersWatchList, setUsersWatchList] = useState<Movies[]>([]);
  const getMovieRequest = async (seachValue: any) => {
    const url = `http://www.omdbapi.com/?s=${seachValue}&apikey=de9c0cdf`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("vad får vi för response", responseJson);
    if (responseJson.Search) {
      setUsersList(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  useEffect(() => {
    const movieListLocalStorage = JSON.parse(
      localStorage.getItem("react-movie-app-my-list") || ""
    );
    setUsersWatchList(movieListLocalStorage);
  }, []);

  const saveToLocalstorage = (items: object) => {
    localStorage.setItem("react-movie-app-my-list", JSON.stringify(items));
  };
  // const rateMovie = (movie: Movies) => {
  //   const newRateMovie = usersWatchList.filter(
  //     (usersWatchList) => usersWatchList.imdbID === movie.imdbID
  //   );
  //   setUsersWatchList(newRateMovie);
  //   saveToLocalstorage(newRateMovie);
  // };

  const removeMovie = (movie: Movies) => {
    const newMovieList = usersWatchList.filter(
      (usersWatchList) => usersWatchList.imdbID !== movie.imdbID
    );
    setUsersWatchList(newMovieList);
    saveToLocalstorage(newMovieList);
  };
  return (
    <>
      <Grid>
        <Grid>
          <MovieListTitle title={"Min Lista med filmer"} />
        </Grid>
        <Grid container direction={"row"} justifyContent={"center"}>
          <MovieListRemove
            usersList={usersWatchList}
            onClickAddOrRemove={removeMovie}
            AddOrRemoveFromList={RemoveOneFromList}
          />
          {/* <Rating /> */}
        </Grid>

        {/* <Grid container direction={"row"} justifyContent={"center"}>
          <MovieRatedList
            usersList={usersWatchList}
            onClickAddOrRemove={rateMovie}
            AddOrRemoveFromList={AddOneForRating}
          />
         <Rating />
        </Grid> */}
      </Grid>
    </>
  );
};

export default UsersList;
