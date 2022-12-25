import { Card, Grid, Rating } from "@mui/material";
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
            <RemoveOneFromList />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default MovieListRemove;
