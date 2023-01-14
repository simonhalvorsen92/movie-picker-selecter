import { Card, Grid } from "@mui/material";

import MoviesRating from "../models/Rating";

import RemoveOneRatedList from "./RemoveOneRatedList";

interface IMovies {
  usersListRating: MoviesRating[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof RemoveOneRatedList>;

  onClickAddOrRemove: (movie: MoviesRating) => void;
}

const MovieListRemove = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.usersListRating.map((movie, index) => (
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
            <RemoveOneRatedList />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default MovieListRemove;
