import React, { useEffect, useState } from "react";
import assetData from "../data/assetData";
import FilterDropdown from "../components/FilterDropdown";
import FadeContent from "../components/Animations/FadeContent";
import SortDropdown from "../components/SortDropdown";

const Assets = () => {
  const priceOptions = ["Free", "Paid"];
  const typeOptions = ["2D", "3D"];
  const [wishlist, toggleWishlist] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState(assetData);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("New Release");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handlePriceSelect = (option) => {
    setSelectedPrices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };
  const handleTypeSelect = (option) => {
    setSelectedType((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const clearFilters = () => {
    setSelectedPrices([]);
    setSelectedType([]);
  };

  useEffect(() => {
    let filtered = [...assetData];

    if (search.trim() !== "") {
      filtered = filtered.filter((asset) =>
        asset.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedPrices.length > 0) {
      filtered = filtered.filter((asset) =>
        selectedPrices.includes(asset.price === "Free" ? "Free" : "Paid")
      );
    }
    if (selectedType.length > 0) {
      filtered = filtered.filter((asset) => selectedType.includes(asset.type));
    }

    if (sortOption === "Most Downloaded") {
      filtered = filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOption === "New Release") {
      filtered = filtered.sort(
        (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
      );
    } else if (sortOption === "Last Updated") {
      filtered = filtered.sort(
        (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
      );
    }

    setFilteredAssets(filtered);
  }, [selectedPrices, search, sortOption, selectedType]);

  return (
    <div className="flex mt-[84px]">
      <div className="mt-10 px-4">
        <div className="relative mb-[22px]">
          <input
            className="text-sm bg-[#202024] border-b border-[#9A9A9A] focus:outline-none focus:border-white h-9 w-[280px] pl-4 rounded-md"
            type="text"
            placeholder="Search for assets"
            value={search}
            onChange={handleSearch}
          />
          <i className="text-[11px] text-gray-300 absolute top-3 right-3 fas fa-search"></i>
        </div>

        <div className="p-[10px_16px] mb-[6px] flex items-baseline justify-between">
          <h1 className="normal-case text-base font-bold">Filters</h1>
          {(selectedPrices.length > 0 || selectedType.length > 0) && (
            <button className="text-xs text-gray-300" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>

        <FilterDropdown
          label="Price"
          options={priceOptions}
          onSelect={handlePriceSelect}
          selectedOptions={selectedPrices}
        />

        <FilterDropdown
          label="Type"
          options={typeOptions}
          onSelect={handleTypeSelect}
          selectedOptions={selectedType}
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

          <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filteredAssets.map((game, index) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={index * 150}
                key={game.id}
              >
                <div className="relative max-w-[400px] h-[200px] group overflow-hidden">
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
    </div>
  );
};

export default Assets;
