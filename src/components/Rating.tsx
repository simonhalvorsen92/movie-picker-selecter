import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import MoviesRating, { MoviesRatingStars } from "../models/Rating";

const LOCOL_STORAGES_KEY = "starSelected";
interface Props {
  movie: MoviesRating;
  onClickRateMovie: (movie: MoviesRating) => void;
}
export default function BasicRating({ movie }: Props) {
  const [value, setValue] = React.useState<number>(-1);

  // React.useEffect(() => {
  //   localStorage.setItem(
  //     "react-movie-app-my-favourites",
  //     JSON.stringify(value)
  //   );
  // }, [value]);

  // localStorage.setItem("items", JSON.stringify(value));

  React.useEffect(() => {
    const getValue = localStorage.getItem(`rating-${movie.imdbID}`);
    if (getValue) {
      setValue(Number(getValue));
    } else {
      setValue(0);
    }
  }, []);

  const saveToLocalstorage = (rating: number, movie: MoviesRating) => {
    let moviesRated: MoviesRatingStars[] = [];
    const getValue = localStorage.getItem(LOCOL_STORAGES_KEY);
    if (getValue) {
      const parseValue = JSON.parse(getValue);
      if (parseValue && parseValue.moviesRated) {
        moviesRated = parseValue.moviesRated;
      }
    }

    moviesRated.push({ id: movie.imdbID, rating: rating });

    localStorage.setItem(`rating-${movie.imdbID}`, JSON.stringify(rating));
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        marginTop: "20px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginBottom: "15px",
        padding: "5px",
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          if (newValue) {
            setValue(newValue);
            const imdbID = (event.target as HTMLInputElement).value;
            saveToLocalstorage(newValue, movie);
          }
        }}
      />
    </Box>
  );
}
