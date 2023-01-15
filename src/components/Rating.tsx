import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import MoviesRating from "../models/Rating";
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
    const getValue = localStorage.getItem(LOCOL_STORAGES_KEY);
    if (getValue) {
      const parseValue = JSON.parse(getValue);
      if (parseValue && parseValue.value) {
        setValue(Number(parseValue.value));
      } else {
        setValue(0);
      }
    } else {
      setValue(0);
    }
  }, []);
  const saveToLocalstorage = (rating: number, movie: MoviesRating) => {
    let moviesRated: MoviesRating[] = [];
    const getValue = localStorage.getItem(LOCOL_STORAGES_KEY);
    if (getValue) {
      const parseValue = JSON.parse(getValue);
      if (parseValue && parseValue.moviesRated) {
        moviesRated = parseValue.moviesRated;
      }
    }
    // Add the movie and its rating to the array
    moviesRated.push({ ...movie, rating: rating });
    // Save the array to localstorage
    localStorage.setItem(LOCOL_STORAGES_KEY, JSON.stringify({ moviesRated }));
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
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
