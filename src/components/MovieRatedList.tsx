import { Card, Grid } from "@mui/material";
import Movies from "../models/Movies";
import MoviesRating from "../models/Rating";
import AddOneForRating from "./AddOneForRating";
import AddOneToList from "./AddOneToList";
import Rating from "./Rating";

interface IMovies {
  usersListRating: MoviesRating[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof AddOneForRating>;

  onClickRateMovie: (movie: MoviesRating) => void;
}

const MovieRatedList = (props: IMovies) => {
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
            onClick={() => props.onClickRateMovie(movie)}
            marginLeft={"5px"}
            marginRight={"5px"}
          >
            <Rating />
            <AddOneForRating />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default MovieRatedList;
