import Movies from "../models/Movies";
import RemoveOneFromList from "./RemoveOneFromList";

interface IMovies {
  usersList: Movies[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof RemoveOneFromList>;

  onClickAddOrRemove: (movie: Movies) => void;
}

const MovieListRemove = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.usersList.map((movie, index) => (
        <div key={movie.imdbID} onClick={() => props.onClickAddOrRemove(movie)}>
          <img src={movie.Poster} alt="movies for the first page"></img>

          <RemoveOneFromList />
        </div>
      ))}
    </>
  );
};
export default MovieListRemove;
