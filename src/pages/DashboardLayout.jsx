import React from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const DashboardLayout = () => {
  return (
    <div className="flex text-[14px]">
      <SideBar />

      <div className="flex flex-1 justify-center">
        <div className="max-w-[1000px] w-full mx-[32px] my-[30px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
