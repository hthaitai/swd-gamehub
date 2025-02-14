import React from "react"
import { NavLink } from "react-router-dom"
import { CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar bg-black">
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
        <Link to="/login">Sign in</Link>
      </button>
    </nav>
  )
}

export default NavBar
