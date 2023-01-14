import { Card, Grid } from "@mui/material";
import Movies from "../models/Movies";
import AddOneToList from "./AddOneToList";

interface IMovies {
  movies: Movies[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof AddOneToList>;

  onClickAddOrRemove: (movie: Movies) => void;
}

const MovieAddList = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.movies.map((movie, index) => (
        <Grid marginBottom={"5px"}>
          <Card
            sx={{
              marginLeft: "5px",
              marginRight: "5px",
            }}
            key={movie.imdbID}
          >
            <img
              height={"300px"}
              width={"200px"}
              src={movie.Poster}
              alt={movie.Title}
            ></img>
          </Card>
          <Grid
            onClick={() => props.onClickAddOrRemove(movie)}
            marginLeft={"5px"}
            marginRight={"5px"}
          >
            <AddOneToList />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default MovieAddList;
