import { Card, Grid } from "@mui/material";

import MoviesRating from "../models/Rating";

import RemoveOneRatedList from "./RemoveOneRatedList";
import { useEffect, useState } from "react";
import BasicRating from "./Rating";
import Rating from "./Rating";
import { makeStyles } from "@material-ui/core";

const LOCOL_STORAGES_KEY = "starSelected";

interface IMovies {
  usersListRating: MoviesRating[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof RemoveOneRatedList>;

  onClickAddOrRemove: (movie: MoviesRating) => void;
}
const useStyles = makeStyles({
  card: {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

const MovieListRemove = (props: IMovies) => {
  const classes = useStyles();

  const [ratedMovies, setRatedMovies] = useState<MoviesRating[]>([]);

  const handleClickRateMovie = (movie: MoviesRating) => {
    setRatedMovies([...ratedMovies, movie]);
  };

  return (
    <>
      {props.usersListRating.map((movie, index) => (
        <Grid
          className={classes.card}
          justifyContent={"space-around"}
          margin={"10px"}
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
          <BasicRating movie={movie} onClickRateMovie={handleClickRateMovie} />
          {/* <span>{`Your rating: ${ratingValue}`}</span>; */}
          {/* <Rating defaultValue={ratingValue} /> */}
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
