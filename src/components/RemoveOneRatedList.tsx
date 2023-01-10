import { Button, Grid } from "@mui/material";

const RemoveOneFromList = () => {
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
          <span>Ta bort</span>
        </Button>
      </Grid>
    </>
  );
};

export default RemoveOneFromList;
