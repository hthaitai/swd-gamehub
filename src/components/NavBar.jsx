import React from "react"
import { NavLink } from "react-router-dom"
import { CircleUserRound } from "lucide-react"

const NavBar = () => {
  return (
    <nav className="navbar">
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
      <button className="sign-in-btn">
        <CircleUserRound className="sign-in-icon" strokeWidth={1} />
        Sign in
      </button>
    </nav>
  )
}

export default NavBar
