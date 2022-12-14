import { Button, Grid } from "@mui/material";

const AddOneToList = () => {
  return (
    <>
      <Grid marginBottom={"10px"}>
        <Button
          sx={{
            backgroundColor: "gold",
            padding: " 5px 15px",
            cursor: "pointer",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0 5px #999",
            width: "200px",
            color: "black",
          }}
        >
          <span>Lägg till i lista</span>
        </Button>
      </Grid>
    </>
  );
};

export default AddOneToList;
