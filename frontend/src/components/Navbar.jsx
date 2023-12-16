import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <Link
        to={"/discuss"}
        className="text-center bg-secordary text-white p-1 block"
      >
        Learn how we can increase your web visibility
      </Link>
      <div className="max-w-[80%] py-2 hidden mx-auto md:flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-semibold">
          CreamBeans
        </Link>
        <div className="flex items-center justify-between gap-5">
          {routes.map((nav, index) => {
            return (
              <Link
                key={index}
                to={nav.to}
                className="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:top-0 after:-right-2 after:h-2 after:w-2 after:bg-secordary after:rounded-full"
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
        <Link
          className="bg-primary px-3 py-2 text-white hover:bg-secordary transition-all duration-300 rounded-md"
          to={"/discuss"}
        >
          Discuss a Project
        </Link>
      </div>

      {/* Mobile Navbar  */}
      <div className="flex items-center justify-between py-2 md:hidden max-w-[90%] mx-auto">
        <Link to={"/"} className="text-2xl">
          CreamBeans
        </Link>
        <svg
          onClick={() => setOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`absolute top-0 right-0 h-screen md:hidden bg-white w-screen z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-end mt-10">
          <div className="p-4">
            <svg
              onClick={() => setOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col text-lg border border-black/20 divide-y divide-black/20">
          {routes.map((nav, index) => {
            return (
              <Link
                key={index}
                to={nav.to}
                className="p-4 flex items-center justify-between"
              >
                <div>{nav.name}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
