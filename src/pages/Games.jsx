import React from "react"
import gameData from "../data/gameData"

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

        <div className="flex flex-col gap-3 ">
          {gameData.map((game) => (
            <div className="border flex p-[10px]" key={game.id}>
              <img className="w-72 h-32 pr-5" src={game.image} />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <button className="hover:underline">
                    <h1 className="text-game">{game.title}</h1>
                  </button>
                  <p>{game.description}</p>
                </div>

                <div className="flex justify-end">
                 
                  <p>{game.price}</p> 
                  <button><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Games
