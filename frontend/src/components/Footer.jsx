import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between p-10">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Cream Beans
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as={Link}
            to="/services"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Services
          </Typography>
        </li>
        <li>
          <Typography
            as={Link}
            to="/project"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Project
          </Typography>
        </li>
        <li>
          <Typography
            as={Link}
            to="/team"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Team
          </Typography>
        </li>
        <li>
          <Typography
            as={Link}
            to="/about"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default SimpleFooter;
