import React, { useEffect, useState } from "react";
import gameData from "../data/gameData";
import FilterDropdown from "../components/FilterDropdown";
import SortDropdown from "../components/SortDropdown";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import productService from "../api/productService";
const Games = () => {
  const genreOptions = ["Action", "RPG", "Open World"];
  const platformOptions = ["PC", "PlayStation", "Xbox"];
  const priceOptions = ["Free", "Paid"];
  const playerOptions = ["Singleplayer", "Multiplayer"];
  const gamesPerPage = 12;
  const [loading, setLoading] = useState(false);
  const [wishlist, toggleWishlist] = useState([]);
  const [filteredGames, setFilteredGames] = useState(gameData);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("New Release");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleGenreSelect = (option) => {
    setSelectedGenres((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handlePlatformSelect = (option) => {
    setSelectedPlatforms((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handlePriceSelect = (option) => {
    setSelectedPrices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handlePlayerSelect = (option) => {
    setSelectedPlayers((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setSelectedPlatforms([]);
    setSelectedPrices([]);
    setSelectedPlayers([]);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      productService
        .getProduct()
        .then((response) => {
          let filtered = response.data.filter((game) => game.category.id === 1); // Lọc game

          if (search.trim() !== "") {
            filtered = filtered.filter((game) =>
              game.title.toLowerCase().includes(search.toLowerCase())
            );
          }

          if (selectedGenres.length > 0) {
            filtered = filtered.filter((game) =>
              selectedGenres.includes(game.genre)
            );
          }

          if (selectedPlatforms.length > 0) {
            filtered = filtered.filter((game) =>
              selectedPlatforms.includes(game.platform)
            );
          }

          if (selectedPrices.length > 0) {
            filtered = filtered.filter((game) =>
              selectedPrices.includes(game.price === 0 ? "Free" : "Paid")
            );
          }

          if (selectedPlayers.length > 0) {
            filtered = filtered.filter((game) =>
              selectedPlayers.includes(game.playerSupport)
            );
          }

          if (sortOption === "New Release") {
            filtered = filtered.sort(
              (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
            );
          } else if (sortOption === "New Upload") {
            filtered = filtered.sort(
              (a, b) => new Date(b.createAt) - new Date(a.createAt)
            );
          }
          setFilteredGames(filtered);
          setCurrentPage(1);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu game:", error);
          setLoading(false);
        });
    }, 500); // Thêm độ trễ 500ms để tạo hiệu ứng loading
  }, [
    selectedGenres,
    selectedPlatforms,
    selectedPrices,
    selectedPlayers,
    search,
    sortOption,
  ]);

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    }
  };
  return (
    <div className="flex gap-4 mt-[84px] p-4">
      <div className="mt-10">
        <div className="relative mb-[22px]">
          <input
            className="text-sm bg-[#202024] border-b border-[#9A9A9A] focus:outline-none focus:border-white h-9 w-[280px] pl-4 rounded-md"
            type="text"
            placeholder="Search for a game"
            value={search}
            onChange={handleSearch}
          />
          <i className="text-[11px] text-gray-300 absolute top-3 right-3 fas fa-search"></i>
        </div>

        <div className="p-[10px_16px] mb-[6px] flex items-baseline justify-between">
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

        <FilterDropdown
          label="Genres"
          options={genreOptions}
          onSelect={handleGenreSelect}
          selectedOptions={selectedGenres}
        />
        <FilterDropdown
          label="Platform"
          options={platformOptions}
          onSelect={handlePlatformSelect}
          selectedOptions={selectedPlatforms}
        />
        <FilterDropdown
          label="Price"
          options={priceOptions}
          onSelect={handlePriceSelect}
          selectedOptions={selectedPrices}
        />
        <FilterDropdown
          label="Player"
          options={playerOptions}
          onSelect={handlePlayerSelect}
          selectedOptions={selectedPlayers}
        />
      </div>

      <div className="mx-auto">
        <div className="mt-10 flex flex-col gap-8 w-[1200px]">
          <div className="flex justify-end flex-1">
            <SortDropdown
              sortOption={sortOption}
              onSortChange={handleSortChange}
            />
          </div>
          {loading ? (
            <div className="flex justify-center items-center w-full h-[600px]">
              <span class="loader"></span>
            </div>
          ) : (
            <div className="gap-3 min-h-[700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {currentGames.map((game) => (
                <div key={game.id}>
                  <div className="relative max-w-[400px] h-auto group overflow-hidden">
                    <LazyLoadImage
                      className="w-full h-full object-cover rounded-md duration-300 group-hover:scale-105"
                      src={
                        game.images && game.images.length > 0
                          ? game.images[0].imageUrl
                          : "https://via.placeholder.com/300"
                      }
                      alt="Game"
                      effect="scroll"
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
                    <Link to={`/games/${game.id}`}>
                      <p className="font-medium">{game.productTitle}</p>
                    </Link>
                    <p className="text-sm font-semibold text-gray-300">
                      {game.price === 0 ? "Free" : `$${game.price}`}
                    </p>
                  </div>{" "}
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center items-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 bg-gray-700 hover:bg-gray-600 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 bg-gray-700 hover:bg-gray-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
