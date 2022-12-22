import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <header>
          <Navbar />
        </header>
        <section></section>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
