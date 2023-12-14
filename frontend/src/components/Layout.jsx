import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarSimple from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarSimple />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
