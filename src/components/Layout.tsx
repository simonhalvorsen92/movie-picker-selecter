import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export const Layout = () => {
  return (
    <>
      <Grid>
        <header>
          <Navbar />
        </header>
        <section></section>
        <main>
          <Outlet></Outlet>
        </main>
      </Grid>
    </>
  );
};
