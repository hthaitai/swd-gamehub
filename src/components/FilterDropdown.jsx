import React, { useState } from "react"
import FadeContent from "./Animations/FadeContent"

const FilterDropdown = ({ label, options, onSelect, selectedOptions }) => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  const handleClick = (option) => {
    onSelect(option)
  }

  return (
    <div className="flex flex-col gap-[6px] mb-[6px]">
      <button
        className={`text-sm flex justify-between items-center rounded-md p-[10px_16px] hover:border hover:bg-[#272727] border border-transparent text-left ${
          open ? "text-white" : "text-gray-300"
        }`}
        onClick={toggleDropdown}
      >
        <div>
          <span>{label}</span>
          {selectedOptions.length > 0 && (
            <span className="pl-2 text-xs text-gray-300">
              ({selectedOptions.length})
            </span>
          )}
        </div>

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
              delay={index * 50}
              key={index}
            >
              <li
                className={`relative mb-[6px] rounded-md p-[10px_16px] text-sm text-gray-300 hover:bg-[#272727] ${
                  selectedOptions.includes(option) ? "bg-[#2D2D2D]" : ""
                }`}
                onClick={() => handleClick(option)}
              >
                {selectedOptions.includes(option) && (
                  <span className="absolute left-0 top-3 bottom-3 w-[2px] bg-white rounded-md"></span>
                )}
                {option}
              </li>
            </FadeContent>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterDropdown
