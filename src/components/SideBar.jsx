import React from "react"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div>
      <nav className="flex flex-col mt-[30px] mx-[20px] w-[280px] gap-[4px]">
        {[
          { to: "/dashboard", label: "Dashboard", exact: true },
          { to: "/dashboard/upload-game", label: "Upload a Game" },
          { to: "/games", label: "Games" },
        ].map(({ to, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact} 
            className={({ isActive }) =>
              `border-l border-gray-500 h-[36px] rounded-r-[5px] flex items-center px-[20px] hover:bg-[#2D2D2D] ${
                isActive ? "text-white bg-[#2D2D2D] border-white" : "text-gray-500"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default SideBar
