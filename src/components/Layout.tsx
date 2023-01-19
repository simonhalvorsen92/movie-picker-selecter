import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export const Layout = () => {
  return (
    <Grid color={"rebeccapurple"} sx={{ backgroundColor: "pink" }}>
      <Navbar />

      <Grid>
        <Outlet></Outlet>
      </Grid>
    </Grid>
  );
};
