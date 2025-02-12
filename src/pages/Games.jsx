import React from "react";

const Games = () => {
  return (
    <div className="container-page ">
      <h1 className="title">Games</h1>
      <div className="game-box">
        <div className=" game-filter">
          <h1 className="font-extrabold mt-4">Filter By</h1>
          <div className="mb-3 mt-12">
            <div className=" text-gray-400 font-bold text-sm">Keyword</div>
            <input type="text" className="form-input" placeholder="Search" />
          </div>
          <div className="mb-3">
            <div className=" text-gray-400 font-bold  text-sm">Category</div>
            <select name="" className="form-input" id="">
              <option value="" disabled selected>
                -- Select Category --
              </option>{" "}
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="mb-3">
            <div className=" text-gray-400 font-bold text-sm">Type</div>
            <select name="" className="form-input" id="">
              <option value="" disabled selected>
                -- Select Type --
              </option>
              <option value="">Free</option>
              <option value="">Pay</option>
            </select>{" "}
          </div>
        </div>
        <div className=" game-item">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default Games;
