import React, { useState } from "react";

const SortDropdown = ({ sortOption, onSortChange }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    onSortChange(option);
    setOpen(false);
  };

  return (
    <div className="flex items-center whitespace-nowrap gap-5">
      <h1 className="normal-case text-base font-bold">Sort by</h1>

      <div className="relative">
        <button
          className={`w-40 text-sm flex justify-between items-center p-[8px_12px] bg-[#272727] border border-transparent gap-3 ${
            open ? "opacity-0" : "text-gray-300 rounded-md"
          } w-full`}
          onClick={toggleDropdown}
        >
          <span>{sortOption}</span>
          <i
            className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></i>
        </button>

        {open && (
          <ul className="top-0 p-[6px] absolute bg-[#252525] rounded-md shadow-lg z-10 flex flex-col gap-1">
            {["New Release", "Last Updated"].map((option, index) => (
              <li
                key={index}
                className={`rounded-md relative p-[8px_12px] text-sm text-gray-300 hover:bg-[#2D2D2D] cursor-pointer ${
                  sortOption === option ? "bg-[#383838]" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {sortOption === option && (
                  <span className="absolute left-0 top-3 bottom-3 w-[2px] bg-white rounded-md"></span>
                )}
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
