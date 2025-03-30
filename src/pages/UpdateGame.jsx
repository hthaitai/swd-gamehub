import React, { useEffect, useState } from "react";
import productService from "../api/productService";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const UpdateGame = () => {
  const [games, setGames] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState("");
  const [game, setGame] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [versionName, setVersionName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await productService.getProduct();
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
        toast.error("Failed to fetch games.");
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    if (!selectedGameId) return;
    const fetchGame = async () => {
      try {
        const response = await productService.getProductById(selectedGameId);
        const data = response.data;
        setGame(data);
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setDiscountedPrice(data.discountedPrice);
        setDownloadLink(data.downloadLink);
        setVersionName(data.versionName);
        setCategoryId(data.categoryId);
      } catch (error) {
        console.error("Error fetching game:", error);
        toast.error("Failed to fetch game data.");
      }
    };
    fetchGame();
  }, [selectedGameId]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discountedPrice", discountedPrice);
    formData.append("downloadLink", downloadLink);
    formData.append("versionName", versionName);
    formData.append("categoryId", categoryId);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      await productService.putProduct(selectedGameId, formData);
      toast.success("Game updated successfully!");
    } catch (error) {
      console.error("Update Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Update failed!");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="text-[27px] pt-[6px] pb-[21px] font-medium">
        Update Game
      </div>

      <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px] text-[14px] flex flex-col justify-between">
        <h2 className="text-white mb-4">Select a Game to Update</h2>
        <select
          className="px-[10px] rounded-[5px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
          onChange={(e) => setSelectedGameId(e.target.value)}
          value={selectedGameId}
        >
          <option value="" disabled>
            Select a game
          </option>
          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.productTitle}
            </option>
          ))}
        </select>
      </div>

      {selectedGameId && (
        <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px] text-[14px] flex flex-col justify-between mt-6">
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col gap-[12px]">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-[10px] rounded-[5px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />

              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="px-[10px] rounded-[5px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />

              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="px-[10px] rounded-[5px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
                min="0"
              />

              <label>Download Link</label>
              <input
                type="text"
                value={downloadLink}
                onChange={(e) => setDownloadLink(e.target.value)}
                className="px-[10px] rounded-[5px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />

              <label>Version Name</label>
              <input
                type="text"
                value={versionName}
                onChange={(e) => setVersionName(e.target.value)}
                className="px-[10px] rounded-[5px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />

              <label>Upload Images</label>
              <input type="file" multiple onChange={handleImageUpload} />
            </div>

            <button
              type="submit"
              className="max-w-[135px] w-full h-[32px] bg-white text-black font-medium rounded-[5px] mt-[32px] hover:opacity-75"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateGame;
