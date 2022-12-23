import Movies from "../models/Movies";
import AddOneToList from "./AddOneToList";

interface IMovies {
  usersList: Movies[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof AddOneToList>;

  onClickAddOrRemove: (movie: Movies) => void;
}

const MovieAddList = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.usersList.map((movie, index) => (
        <div key={movie.imdbID} onClick={() => props.onClickAddOrRemove(movie)}>
          <img src={movie.Poster} alt="movies for the first page"></img>

          <AddOneToList />
        </div>
      ))}
    </>
  );
};

export default MovieAddList;
