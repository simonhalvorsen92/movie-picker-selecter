import { Type } from "typescript";
import Movies from "../models/Movies";
import AddToList from "./AddToList";

interface IMovies {
  firstPageMovie: Movies[];

  AddToList: React.ComponentPropsWithRef<typeof AddToList>;

  handleMyWatchListClick: (movie: Movies) => void;
}

const FirstPageMovies = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.firstPageMovie.map((movie, index) => (
        <div
          key={movie.Poster}
          onClick={() => props.handleMyWatchListClick(movie)}
        >
          <img src={movie.Poster} alt="movies for the first page"></img>
          <AddToList />
        </div>
      ))}
    </>
  );
};

export default FirstPageMovies;
