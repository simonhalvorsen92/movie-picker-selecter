import { Search as MuiSearch } from "@material-ui/icons";
import { InputBase, Paper } from "@material-ui/core";
import { Card, Grid } from "@mui/material";

interface ISearchMovie {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = (props: ISearchMovie) => {
  return (
    <Grid
      container
      marginTop={"20px"}
      marginBottom={"20px"}
      direction={"row"}
      justifyContent={"center"}
    >
      <Card>
        <InputBase
          placeholder="Sök film…"
          inputProps={{ "aria-label": "search" }}
          type="text"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          startAdornment={<MuiSearch />}
        />
      </Card>
    </Grid>
  );
};

export default SearchBox;
