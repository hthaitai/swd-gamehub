import React, { useState } from "react"
import FadeContent from "./Animations/FadeContent"

const Dropdown = ({ label, options, onSelect }) => {
  const [open, setOpen] = useState(false)
  const [active, isActive] = useState(null)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  const handleClick = (option) => {
    onSelect(option)
    isActive((prevStyle) => (prevStyle === option ? null : option))
  }

  return (
    <div className="flex flex-col gap-[6px] mb-[6px]">
      <button
        className={`text-sm flex justify-between items-center rounded-md p-[6px_12px] hover:border hover:bg-[#272727] border border-transparent text-left ${
          open ? "text-white" : "text-gray-300"
        }`}
        onClick={toggleDropdown}
      >
        {label}
        <i
          className={`fa-solid fa-chevron-right text-[11px] transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        ></i>
      </button>

      {open && (
        <ul className="space-y-[6px]">
          {options.map((option, index) => (
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={index * 100}
              key={index}
            >
              <li
                className={`mb-[6px] rounded-md p-[6px_12px] text-sm text-gray-300 hover:border hover:bg-[#272727] border border-transparent ${
                  active === option ? "bg-[#2D2D2D]" : ""
                }`}
                onClick={() => handleClick(option)}
              >
                {option}
              </li>
            </FadeContent>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
