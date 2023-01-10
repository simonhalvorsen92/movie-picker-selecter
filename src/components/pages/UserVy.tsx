import { useEffect, useState } from "react";
import Movies from "../../models/Movies";
import AddOneToList from "../AddOneToList";
import MovieListAdd from "../MovieListAdd";
import MovieListTitle from "../MovieListTitle";
import SearchBox from "../SearchBox";

import { Grid } from "@mui/material";

const UserVy = () => {
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

  const addMovieToList = (movie: Movies) => {
    const newMovieList = [...usersWatchList, movie];
    setUsersWatchList(newMovieList);
    saveToLocalstorage(newMovieList);
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
          <MovieListAdd
            usersList={usersList}
            onClickAddOrRemove={addMovieToList}
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
