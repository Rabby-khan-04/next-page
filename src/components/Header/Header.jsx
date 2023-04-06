import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl text-[#3b82f6]">
                <BoltIcon className="h-5" />
              </span>
              <span className="text-xl font-bold">NextPage</span>
            </Link>
          </div>
          <ul className="items-center hidden font-semibold space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 hover:text-blue-300"
                    : "hover:text-blue-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 hover:text-blue-300"
                    : "hover:text-blue-300"
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 hover:text-blue-300"
                    : "hover:text-blue-300"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
            <Bars3BottomRightIcon className="h-6" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10 bg-white p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <Link to="/" className="flex items-center">
                  <span className="text-xl text-[#3b82f6]">
                    <BoltIcon className="h-6" />
                  </span>
                  <span className="text-2xl font-bold">NextPage</span>
                </Link>

                <button onClick={() => setIsMenuOpen(false)}>
                  <XMarkIcon className="h-6" />
                </button>
              </div>
              <ul className="space-y-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 hover:text-blue-300"
                        : "hover:text-blue-300"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 hover:text-blue-300"
                        : "hover:text-blue-300"
                    }
                  >
                    Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 hover:text-blue-300"
                        : "hover:text-blue-300"
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
