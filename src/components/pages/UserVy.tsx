import { useEffect, useState } from "react";
import Movies from "../../models/Movies";
import AddOneToList from "../AddOneToList";
import MovieListAdd from "../MovieListAdd";
import MovieListTitle from "../MovieListTitle";
import SearchBox from "../SearchBox";
import RemoveOneFromList from "../RemoveOneFromList";
import MovieListRemove from "../MovieListRemove";

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

  const removeMovie = (movie: Movies) => {
    const newMovieList = usersWatchList.filter(
      (usersWatchList) => usersWatchList.imdbID !== movie.imdbID
    );
    setUsersWatchList(newMovieList);
    saveToLocalstorage(newMovieList);
  };
  return (
    <>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        <MovieListTitle title={"Filmer"} />
      </div>

      <div>
        <MovieListAdd
          usersList={usersList}
          onClickAddOrRemove={addMovieToList}
          AddOrRemoveFromList={AddOneToList}
        />
      </div>
      <div>
        <MovieListTitle title={"Min Lista med filmer"} />
      </div>
      <div>
        <MovieListRemove
          usersList={usersWatchList}
          onClickAddOrRemove={removeMovie}
          AddOrRemoveFromList={RemoveOneFromList}
        />
      </div>
    </>
  );
};

export default UserVy;
