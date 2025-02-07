import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <span className="bold">Game</span> | Hub
      </h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/games">Games</Link>
        </li>
        <li className="navbar-item">
          <Link to="/assets">Assets</Link>
        </li>
      </ul>
      <button className="sign-in-btn">Sign in</button>
    </nav>
  )
}

export default NavBar
