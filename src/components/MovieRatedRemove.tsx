import { Card, Grid } from "@mui/material";

import MoviesRating from "../models/Rating";

import RemoveOneRatedList from "./RemoveOneRatedList";
import { useEffect, useState } from "react";
import BasicRating from "./Rating";
import Rating from "./Rating";

const LOCOL_STORAGES_KEY = "starSelected";

interface IMovies {
  usersListRating: MoviesRating[];

  AddOrRemoveFromList: React.ComponentPropsWithRef<typeof RemoveOneRatedList>;

  onClickAddOrRemove: (movie: MoviesRating) => void;
}

const MovieListRemove = (props: IMovies) => {
  // const ratingValue = localStorage.getItem(LOCOL_STORAGES_KEY,rat);
  // const [rating, setRating] = useState(
  //   Number(localStorage.getItem(LOCOL_STORAGES_KEY)) || 0
  // );
  // <span>{`Your rating: ${ratingValue}`}</span>;
  // return (

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
          <BasicRating
            movie={movie}
            onClickRateMovie={function (rating: MoviesRating): void {
              throw new Error("Function not implemented.");
            }}
          />
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
