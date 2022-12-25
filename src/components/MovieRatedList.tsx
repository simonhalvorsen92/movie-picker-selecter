import { Card, Grid } from "@mui/material";
import Movies from "../models/Movies";
import AddOneForRating from "./AddOneForRating";

interface IMovies {
  usersList: Movies[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof AddOneForRating>;

  onClickAddOrRemove: (movie: Movies) => void;
}

const MovieAddList = (props: IMovies) => {
  // const AddToList1 = props.AddToList
  return (
    <>
      {props.usersList.map((movie, index) => (
        <Grid marginBottom={"5px"}>
          <Grid
            onClick={() => props.onClickAddOrRemove(movie)}
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

export default MovieAddList;
