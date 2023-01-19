import { Card, Grid } from "@mui/material";
import Movies from "../models/Movies";
import AddOneToList from "./AddOneToList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

interface IMovies {
  movies: Movies[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof AddOneToList>;

  onClickAddOrRemove: (movie: Movies) => void;
}

const MovieAddList = (props: IMovies) => {
  const classes = useStyles();
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.movies.map((movie, index) => (
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

            <Grid onClick={() => props.onClickAddOrRemove(movie)}>
              <AddOneToList />
            </Grid>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MovieAddList;
