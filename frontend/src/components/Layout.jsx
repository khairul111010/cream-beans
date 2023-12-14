import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[10vh]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
