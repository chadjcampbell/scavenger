import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div id="root">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
