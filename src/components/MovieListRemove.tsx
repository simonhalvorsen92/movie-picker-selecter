import { Card, Grid } from "@mui/material";
import { useEffect } from "react";
import Movies from "../models/Movies";
import Rating from "./Rating";
import { makeStyles } from "@material-ui/core/styles";

import RemoveOneFromList from "./RemoveOneFromList";
const useStyles = makeStyles({
  card: {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

interface IMovies {
  usersList: Movies[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof RemoveOneFromList>;

  onClickAddOrRemove: (movie: Movies) => void;
}

const MovieListRemove = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  const classes = useStyles();

  return (
    <>
      {props.usersList.map((movie, index) => (
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
            onClick={() => props.onClickAddOrRemove(movie)}
            marginLeft={"5px"}
            marginRight={"5px"}
          >
            <RemoveOneFromList />
          </Grid>
          {/* <Rating /> */}
        </Grid>
      ))}
    </>
  );
};
export default MovieListRemove;
