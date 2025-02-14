import React, { useState } from "react"
import gameData from "../data/gameData"
import Dropdown from "../components/Dropdown"
import { NavLink } from "react-router-dom"
import FadeContent from "../components/Animations/FadeContent"

const Games = () => {
  const genreOptions = ["Action", "Racing", "Simulation"]
  const playerOptions = ["Singleplayer", "Multiplayer"]
  const platformOptions = ["PC", "Console", "Mobile"]

  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (gameId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(gameId)
        ? prevWishlist.filter((id) => id !== gameId)
        : [...prevWishlist, gameId]
    )
  }

  return (
    <div className="mt-[84px]">
      <div className="flex">
        <div className="mt-16 w-[300px] px-4 border-r-[1px] border-gray-500">
          <div className="relative self-center pb-4">
            <input
              className="border-b border-gray-300 focus:outline-none focus:border-white h-9 w-full px-4 bg-neutral-900 rounded-md"
              type="text"
              placeholder="Search for a game"
            />
            <i className="text-gray-300 absolute top-2.5 right-3 fas fa-search"></i>
          </div>
          <Dropdown label="Genres" options={genreOptions} />
          <Dropdown label="Player" options={playerOptions} />
          <Dropdown label="Platform" options={platformOptions} />
        </div>

        <div className="flex flex-col flex-1 gap-8">
          <div className="pt-16 w-[1000px] self-center ">
            <div className="flex items-center gap-4">
              <NavLink>
                <h1 className="text-[28px] normal-case text-gray-300">Home</h1>
              </NavLink>

              <i className="fa-solid fa-chevron-right text-[14px] text-gray-300"></i>

              <NavLink>
                <h1 className="text-[28px] normal-case">Games</h1>
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 w-[1000px] self-center">
            {gameData.map((game, index) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={index*150}
              >
                <div
                  className="flex p-1 bg-neutral-900 rounded-md"
                  key={game.id}
                >
                  <img
                    className="w-[200px] h-[100px] mr-2 rounded-sm"
                    src={game.image}
                  />

                  <div className="px-1 pt-1 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <button className="hover:underline">
                          <h1 className="normal-case text-xl font-bold">
                            {game.title}
                          </h1>
                        </button>

                        <div className="flex gap-2 size text-gray-300">
                          <button className="hover:text-white">
                            <i class="fa-solid fa-cart-shopping"></i>
                          </button>

                          <button
                            className="hover:text-white"
                            onClick={() => toggleWishlist(game.id)}
                          >
                            <i
                              className={
                                wishlist.includes(game.id)
                                  ? "fa-solid fa-heart"
                                  : "fa-regular fa-heart"
                              }
                            ></i>
                          </button>
                        </div>
                      </div>

                      <p className="pt-1 text-sm text-gray-300">
                        {game.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-8 text-sm">
                        <div>
                          <i class="fa-solid fa-thumbs-up"></i>
                          <span className="pl-1">300.000</span>
                        </div>

                        <div>
                          <i class="fa-solid fa-thumbs-down"></i>
                          <span className="pl-1">100.000</span>
                        </div>
                      </div>

                      <div className="flex gap-3 items-center">
                        <p>{game.price}</p>
                        <button className="text-sm font-bold text-black w-[90px] h-[30px] flex items-center justify-center bg-white rounded-[4px] border border-transparent hover:bg-black hover:text-white hover:border-white">
                          <p>{game.price === "Free" ? "Play" : "Buy"}</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
