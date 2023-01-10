import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const LOCOL_STORAGES_KEY = "starSelected";

export default function BasicRating() {
  const [value, setValue] = React.useState<number>(-1);

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

  const saveToLocalstorage = (rating: number) => {
    localStorage.setItem(LOCOL_STORAGES_KEY, JSON.stringify({ value: rating }));
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
            saveToLocalstorage(newValue);
          }
        }}
      />
    </Box>
  );
}
