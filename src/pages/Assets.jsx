import React, { useEffect, useState } from "react";
import assetData from "../data/assetData";
import FilterDropdown from "../components/FilterDropdown";
import SortDropdown from "../components/SortDropdown";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import productService from "../api/productService";

const Assets = () => {
  const priceOptions = ["Free", "Paid"];
  const [wishlist, toggleWishlist] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState(assetData);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("New Release");
  const [loading, setLoading] = useState(false);
  const assetsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
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


  const totalPages = Math.ceil(filteredAssets.length / assetsPerPage);
  const indexOfLastAsset = currentPage * assetsPerPage;
  const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
  const currentAssets = filteredAssets.slice(
    indexOfFirstAsset,
    indexOfLastAsset
  );

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
  const clearFilters = () => {
    setSelectedPrices([]);
    setSelectedType([]);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      productService.getProduct().then((response) => {
        let filtered = response.data.filter((asset) => asset.category.id === 2); // Lọc assets
  
        if (search.trim() !== "") {
          filtered = filtered.filter((asset) =>
            asset.productTitle.toLowerCase().includes(search.toLowerCase())
          );
        }
  
        if (selectedPrices.length > 0) {
          filtered = filtered.filter((asset) =>
            selectedPrices.includes(asset.price === 0 ? "Free" : "Paid")
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
        setFilteredAssets(filtered);
        setCurrentPage(1);
        setLoading(false);
      });
    }, 500);
  }, [selectedPrices, search, sortOption]);
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
      </div>

      <div className="mx-auto min-h-[260px]">
        <div className="mt-10 flex flex-col gap-8 w-[1200px]">
          <div className="flex justify-end flex-1">
            <SortDropdown
              sortOption={sortOption}
              onSortChange={handleSortChange}
            />
          </div>
          {loading ? (
            <div className="flex justify-center items-center w-full h-[600px]">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="gap-3 grid min-h-[260px]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {currentAssets.map((asset) => (
                <div key={asset.id}>
                  <div className="relative  group overflow-hidden">
                    <Link to={`/assets/${asset.id}`}>
                      <LazyLoadImage
                        className=" w-[400px] h-[200px] object-cover rounded-md duration-300 group-hover:scale-105"
                        src={
                          asset.images && asset.images.length > 0
                            ? asset.images[0].imageUrl
                            : "https://via.placeholder.com/300"
                        }
                        alt="Asset"
                        effect="scroll"
                      />
                    </Link>

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
                            wishlist.includes(asset.id)
                              ? "fa-solid fa-heart text-red-500 text-xs"
                              : "fa-regular fa-heart text-xs"
                          }
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div className="py-2 w-[300px]">
                    <p className="font-medium">{asset.productTitle}</p>
                    <p className="text-sm text-gray-300 font-semibold">
                      ${asset.price}
                    </p>
                  </div>
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

export default Assets;
