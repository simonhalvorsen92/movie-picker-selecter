import { Button, Grid } from "@mui/material";

const AddOneForRating = () => {
  return (
    <>
      <Grid marginBottom={"10px"}>
        <Button
          sx={{
            backgroundColor: "red",
            padding: " 5px 15px",
            cursor: "pointer",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0 5px #999",
            width: "200px",
            color: "white",
          }}
        >
          <span>Rate Movie</span>
        </Button>
      </Grid>
    </>
  );
};

export default AddOneForRating;
