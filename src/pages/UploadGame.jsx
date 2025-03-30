import React, { useEffect, useState } from "react";
import productService from "../api/productService";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const UploadGame = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [versionName, setVersionName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [userId, setUserId] = useState("");
  const [images, setImages] = useState([]);
  const { user } = useAuth(); 

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); 
    setImages([...images, ...files]); 
  };
  useEffect(() => {
    if (user) setUserId(user.userId);
  }, [user]);

  const handleCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discountedPrice", discountedPrice);
    formData.append("downloadLink", downloadLink);
    formData.append("versionName", versionName);
    formData.append("categoryId", categoryId);
    formData.append("userId", userId);
    images.forEach((image, index) => {
      formData.append("images", image);
    });
    try {
      const response = await productService.postProduct(formData);
      console.log("Uploaded game data:", response.data);
      toast.success("Game uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Upload failed!");
    }
  };
  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="text-[27px] pt-[6px] pb-[21px] font-medium">
        Upload a Game
      </div>

      <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px] text-[14px] flex flex-col justify-between">
        <form onSubmit={handleCreate}>
          <div className="flex flex-col gap-[12px]">
            <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />
            </div>

            <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />
            </div>

            <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
                min="0"
              />
            </div>
            <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
              <label>Downloadlink</label>
              <input
                type="text"
                value={downloadLink}
                onChange={(e) => setDownloadLink(e.target.value)}
                className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />
            </div>
            <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
              <label>Version name</label>
              <input
                type="text"
                value={versionName}
                onChange={(e) => setVersionName(e.target.value)}
                className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white"
              />
            </div>
            <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
              <label>Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="px-[10px] rounded-[5px] w-[280px] bg-[#2B2B2B] border h-[36px] outline-none border-gray-500 focus:border-white"
              >
                <option value="">Select Category</option>
                <option value="1">Game</option>
                <option value="2">Assets</option>
              </select>
            </div>
            <input type="hidden" value={userId} />

            <div className="max-w-[500px] w-full flex flex-col gap-[10px]">
              <label>Upload Images</label>
              <input type="file" multiple onChange={handleImageUpload} />

              {/* Hiển thị danh sách ảnh */}
              {images.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-800 p-2 rounded"
                    >
                      <p className="text-white">{image.name}</p>
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="max-w-[135px] w-full h-[32px] bg-white text-black font-medium rounded-[5px] mt-[32px] hover:opacity-75"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadGame;
