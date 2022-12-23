import { useEffect, useState } from "react";
import Movies from "../../models/Movies";
import FirstPageMovies from "../MovieListAdd";
import MovieListTitle from "../MovieListTitle";
import SearchBox from "../SearchBox";
import AddToList from "../AddOneToList";

const Start = () => {
  const [firstPageMovie, setFirstPageMovie] = useState<Movies[]>([]);
  const [myWatchList, setWatchList] = useState<Movies[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("Movies");

  const getMovieRequest = async (seachValue: any) => {
    const url = `http://www.omdbapi.com/?s=${seachValue}&apikey=de9c0cdf`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setFirstPageMovie(responseJson.Search);
    }
  };
  const addMyMovieToList = (movie: Movies) => {
    const newMovieList = [...myWatchList, movie];
    setWatchList(newMovieList);
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <>
      {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieListTitle title={title} />
      START
      <FirstPageMovies
        firstPageMovie={firstPageMovie}
        handleMyWatchListClick={addMyMovieToList}
        AddToList={AddToList}
      /> */}
    </>
  );
};

export default Start;
