import React, { useState } from "react"
import AnimatedContent from "./Animations/AnimatedContent"

const Dropdown = ({ label, options }) => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }
  return (
    <div className="flex flex-col gap-[6px] mb-[6px]">
      <button
        className="flex justify-between items-center rounded-md p-[6px_12px] hover:border hover:bg-neutral-900 border border-transparent text-left"
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
            <AnimatedContent
              distance={50}
              direction="horizontal"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={index*100}
            >
              <li
                className="mb-[6px] rounded-md p-[6px_24px] text-sm text-gray-300 hover:border hover:bg-neutral-900 border border-transparent"
                key={index}
              >
                {option}
              </li>
            </AnimatedContent>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
