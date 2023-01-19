import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

import { Box, Grid, Typography } from "@mui/material";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

const useStyles = makeStyles({
  root: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
  },
  card: {
    margin: "20px",

    width: "200px",
    height: "295px",
  },
  selectedMovie: {
    marginTop: "20px",
  },
});

const MovieSelector: React.FC = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=de9c0cdf&s=avengers")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid width={"100%"} height={"100vh"}>
      <Box className={classes.root}>
        <Grid
          sx={{
            padding: "30px",

            borderTop: "solid black 0.5px",
            borderBottom: "solid black 0.5px",

            borderRadius: "5px",
            backgroundColor: "lightYellow",
          }}
        >
          <Typography variant="h5" fontFamily={"monospace"}>
            Bättra din filmupplevelse
          </Typography>
        </Grid>
        {movies.map((movie) => (
          <Grid
            sx={{
              margin: "15px",
              border: "solid grey 0.5px",
              borderRadius: "5px",
              backgroundColor: "lightYellow",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            }}
          >
            <Card className={classes.card} key={movie.Title}>
              <CardMedia
                component="img"
                alt={movie.Title}
                image={movie.Poster}
                title={movie.Title}
              />
            </Card>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};
export default MovieSelector;
