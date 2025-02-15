import React, { useEffect, useState } from "react"
import gameData from "../data/gameData"
import Dropdown from "../components/Dropdown"
import FadeContent from "../components/Animations/FadeContent"

const Games = () => {
  const genreOptions = ["Action", "RPG", "Open World"]
  const platformOptions = ["PC", "PlayStation", "Xbox"]
  const priceOptions = ["Free", "Paid"]
  const playerOptions = ["Singleplayer", "Multiplayer"]

  const [wishlist, setWishlist] = useState([])
  const [filteredGames, setFilteredGames] = useState(gameData)

  const [selectedGenre, setSelectedGenre] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  useEffect(() => {
    let filtered = gameData

    if (selectedGenre) {
      filtered = filtered.filter((game) => game.genre === selectedGenre)
    }

    if (selectedPlatform) {
      filtered = filtered.filter((game) => game.platform === selectedPlatform)
    }

    if (selectedPrice) {
      if (selectedPrice === "Free") {
        filtered = filtered.filter((game) => game.price === "Free")
      } else if (selectedPrice === "Paid") {
        filtered = filtered.filter((game) => game.price !== "Free")
      }
    }

    if (selectedPlayer) {
      filtered = filtered.filter(
        (game) => game.playerSupport === selectedPlayer
      )
    }

    setFilteredGames(filtered)
  }, [selectedGenre, selectedPlatform, selectedPrice, selectedPlayer])

  const toggleWishlist = (gameId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(gameId)
        ? prevWishlist.filter((id) => id !== gameId)
        : [...prevWishlist, gameId]
    )
  }

  const handleGenreSelect = (option) => {
    setSelectedGenre((prevOption) => (prevOption === option ? null : option))
  }

  const handlePlatformSelect = (option) => {
    setSelectedPlatform((prevOption) => (prevOption === option ? null : option))
  }

  const handlePriceSelect = (option) => {
    setSelectedPrice((prevOption) => (prevOption === option ? null : option))
  }

  const handlePlayerSelect = (option) => {
    setSelectedPlayer((prevOption) => (prevOption === option ? null : option))
  }

  return (
    <div className="flex mt-[84px]">
      <div className="mt-[40px] w-[310px] px-4 border-r-[1px] border-gray-300">
        <div className="relative self-center pb-4">
          <input
            className="text-sm bg-[#202024] border-b border-[#9A9A9A] focus:outline-none focus:border-white h-8 w-full pl-4 rounded-md"
            type="text"
            placeholder="Search for a game"
          />
          <i className="text-[11px] text-gray-300 absolute top-3 right-3 fas fa-search"></i>
        </div>
        <Dropdown
          label="Genres"
          options={genreOptions}
          onSelect={handleGenreSelect}
        />
        <Dropdown
          label="Platform"
          options={platformOptions}
          onSelect={handlePlatformSelect}
        />
        <Dropdown
          label="Price"
          options={priceOptions}
          onSelect={handlePriceSelect}
        />
        <Dropdown
          label="Player"
          options={playerOptions}
          onSelect={handlePlayerSelect}
        />
      </div>

      <div className="flex flex-1 justify-center">
        <div className="mt-[40px] gap-3 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGames.map((game, index) => (
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={index * 150}
              key={game.id}
            >
              <div className="relative max-w-[400px] h-auto group overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-md duration-300 group-hover:scale-105"
                  src={game.image}
                  alt="Game"
                />

                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-0 right-0 flex gap-2 m-2 p-[1px_4px] rounded-md text-gray-300 bg-black/50">
                  <button title="Add to cart" className="hover:text-white">
                    <i className="fa-solid fa-cart-shopping text-xs"></i>
                  </button>

                  <button
                    title="Add to wishlist"
                    className="hover:text-white"
                    onClick={() => toggleWishlist(game.id)}
                  >
                    <i
                      className={
                        wishlist.includes(game.id)
                          ? "fa-solid fa-heart text-red-500 text-xs"
                          : "fa-regular fa-heart text-xs"
                      }
                    ></i>
                  </button>
                </div>
              </div>

              <div className="py-2 w-[300px]">
                <p className="font-medium">{game.title}</p>
                <p className="text-sm text-gray-300">{game.price}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Games
