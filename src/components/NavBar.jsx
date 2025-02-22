import React from "react";
import { NavLink } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-[#0F0F0F]">
      <h1 className="logo">
        <span className="bold">Game</span> | Hub
      </h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Games
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/assets"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Assets
          </NavLink>
        </li>
      </ul>
      <Link to="/login">
        <button className="sign-in-btn relative bg-black text-white border border-white px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:border-white hover:shadow-white hover:shadow-md">
          <span className="absolute inset-0 bg-white opacity-20 blur-md transition-all duration-300 hover:opacity-40"></span>
          <CircleUserRound
            className="sign-in-icon relative z-10"
            strokeWidth={1}
          />
          <span className="relative z-10">Sign in</span>
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
