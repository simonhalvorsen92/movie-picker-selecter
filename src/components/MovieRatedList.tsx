import { makeStyles } from "@material-ui/core";
import { Card, Grid } from "@mui/material";
import { useState } from "react";
import Movies from "../models/Movies";
import MoviesRating from "../models/Rating";
import AddOneForRating from "./AddOneForRating";
import AddOneToList from "./AddOneToList";
import BasicRating from "./Rating";
import Rating from "./Rating";

interface IMovies {
  usersListRating: MoviesRating[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof AddOneForRating>;

  onClickRateMovie: (movie: MoviesRating) => void;
}
const useStyles = makeStyles({
  card: {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});
const MovieRatedList = (props: IMovies) => {
  const classes = useStyles();
  return (
    <>
      {props.usersListRating.map((movie, index) => (
        <Grid
          className={classes.card}
          justifyContent={"space-around"}
          marginBottom={"50px"}
        >
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
            <AddOneForRating />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default MovieRatedList;
