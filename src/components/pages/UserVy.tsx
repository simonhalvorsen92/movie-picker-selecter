import { useEffect, useState } from "react";
import Movies from "../../models/Movies";
import AddToList from "../AddToList";
import FirstPageMovies from "../FirstPageMovies";
import MovieListTitle from "../MovieListTitle";
import SearchBox from "../SearchBox";

const UserVy = () => {
  const [firstPageMovie, setFirstPageMovie] = useState<Movies[]>([
    // {
    //   Title: "Star Wars: Episode IV - A New Hope",
    //   Year: "1977",
    //   imdbID: "tt0076759",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode V - The Empire Strikes Back",
    //   Year: "1980",
    //   imdbID: "tt0080684",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode VI - Return of the Jedi",
    //   Year: "1983",
    //   imdbID: "tt0086190",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode VII - The Force Awakens",
    //   Year: "2015",
    //   imdbID: "tt2488496",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode I - The Phantom Menace",
    //   Year: "1999",
    //   imdbID: "tt0120915",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode III - Revenge of the Sith",
    //   Year: "2005",
    //   imdbID: "tt0121766",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode II - Attack of the Clones",
    //   Year: "2002",
    //   imdbID: "tt0121765",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Rogue One: A Star Wars Story",
    //   Year: "2016",
    //   imdbID: "tt3748528",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    // },
  ]);

  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("Movies");
  const [myWatchList, setWatchList] = useState<Movies[]>([]);
  const getMovieRequest = async (seachValue: any) => {
    const url = `http://www.omdbapi.com/?s=${seachValue}&apikey=de9c0cdf`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setFirstPageMovie(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addMyMovieToList = (movie: Movies) => {
    const newMovieList = [...myWatchList, movie];
    setWatchList(newMovieList);
  };
  return (
    <>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieListTitle title={"Filmer"} />
      START
      <div>
        <FirstPageMovies
          firstPageMovie={firstPageMovie}
          handleMyWatchListClick={addMyMovieToList}
          AddToList={AddToList}
        />
      </div>
      <div>
        <MovieListTitle title={"Min Lista med filmer"} />
      </div>
    </>
  );
};

export default UserVy;
