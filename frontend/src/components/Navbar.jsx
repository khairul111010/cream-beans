import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link} // Use Link from react-router-dom
        to="/services" // Specify the path
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Services
      </Typography>
      <Typography
        as={Link}
        to="/project"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Project
      </Typography>
      <Typography
        as={Link}
        to="/team"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Team
      </Typography>
      <Typography
        as={Link}
        to="/about"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        About Us
      </Typography>
      <Button as={Link} to="/contact-us bg-#6F4E37 hover:bg-#8B634B">
        Contact Us
      </Button>
        
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          text-color="#6F4E37"
        >
          Cream Beans
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
