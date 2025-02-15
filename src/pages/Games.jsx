import React, { useEffect, useState } from "react"
import gameData from "../data/gameData"
import Dropdown from "../components/Dropdown"
import FadeContent from "../components/Animations/FadeContent"

const Games = () => {
  const genreOptions = ["Action", "RPG", "Open World"]
  const platformOptions = ["PC", "PlayStation", "Xbox"]
  const priceOptions = ["Free", "Paid"]
  const playerOptions = ["Singleplayer", "Multiplayer"]

  const [wishlist, toggleWishlist] = useState([])
  const [filteredGames, setFilteredGames] = useState(gameData)

  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [hoveredImage, setHoveredImage] = useState("")

  const handleGenreSelect = (option) => {
    setSelectedGenres((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const handlePlatformSelect = (option) => {
    setSelectedPlatforms((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const handlePriceSelect = (option) => {
    setSelectedPrices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const handlePlayerSelect = (option) => {
    setSelectedPlayers((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const clearFilters = () => {
    setSelectedGenres([])
    setSelectedPlatforms([])
    setSelectedPrices([])
    setSelectedPlayers([])
  }

  useEffect(() => {
    let filtered = gameData

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((game) => selectedGenres.includes(game.genre))
    }

    if (selectedPlatforms.length > 0) {
      filtered = filtered.filter((game) =>
        selectedPlatforms.includes(game.platform)
      )
    }

    if (selectedPrices.length > 0) {
      filtered = filtered.filter((game) =>
        selectedPrices.includes(game.price === "Free" ? "Free" : "Paid")
      )
    }

    if (selectedPlayers.length > 0) {
      filtered = filtered.filter((game) =>
        selectedPlayers.includes(game.playerSupport)
      )
    }

    setFilteredGames(filtered)
  }, [selectedGenres, selectedPlatforms, selectedPrices, selectedPlayers])

  return (
    <div className="flex mt-[84px]">
      <div className="mt-[40px] w-[275px] px-4">
        <div className="relative self-center pb-4">
          <input
            className="text-sm bg-[#202024] border-b border-[#9A9A9A] focus:outline-none focus:border-white h-8 w-full pl-4 rounded-md"
            type="text"
            placeholder="Search for a game"
          />
          <i className="text-[11px] text-gray-300 absolute top-3 right-3 fas fa-search"></i>
        </div>

        <div className="p-[12px] flex items-baseline justify-between">
          <h1 className="normal-case text-base font-bold">Filters</h1>
          {(selectedGenres.length > 0 ||
            selectedPlatforms.length > 0 ||
            selectedPrices.length > 0 ||
            selectedPlayers.length > 0) && (
            <button className="text-xs text-gray-300" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>

        <Dropdown
          label="Genres"
          options={genreOptions}
          onSelect={handleGenreSelect}
          selectedOptions={selectedGenres}
        />
        <Dropdown
          label="Platform"
          options={platformOptions}
          onSelect={handlePlatformSelect}
          selectedOptions={selectedPlatforms}
        />
        <Dropdown
          label="Price"
          options={priceOptions}
          onSelect={handlePriceSelect}
          selectedOptions={selectedPrices}
        />
        <Dropdown
          label="Player"
          options={playerOptions}
          onSelect={handlePlayerSelect}
          selectedOptions={selectedPlayers}
        />
      </div>

      <div className="mt-10 flex flex-1 justify-center">
        <div className="gap-3 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGames.map((game, index) => (
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={index * 150}
              key={game.id}
            >
              <div
                className="relative max-w-[400px] h-auto group overflow-hidden"
                onMouseEnter={() => setHoveredImage(game.image)} // 🔹 Change background on hover
                onMouseLeave={() => setHoveredImage("")} // 🔹 Reset on mouse leave
              >
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
