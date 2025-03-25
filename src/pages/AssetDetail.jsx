import React, { useEffect, useState } from "react";
import assets from "../data/assetData";
import { useParams } from "react-router-dom";
import productService from "../api/productService";
function AssetDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState(null);
  const [selectedImage, setSelectedImage] = useState([0]);

  useEffect(() => {
    setTimeout(() => {
      productService.getProductById(id).then((response) => {
        setAsset(response.data);
        setSelectedImage(
          response.data.images && response.data.images.length > 0
            ? response.data.images[0].imageUrl
            : ""
        );
        setLoading(false);
      });
    }, 500);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div className="mt-[84px]">
      <div className="h-screen items-center flex flex-col">
        {/* body */}
        <div className="flex flex-col">
             {/* bar title */}
             <div className="flex mt-5 font-semibold text-[20px]">
            <div className="w-[300px] h-[40px] text-center">
              <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
              Essential assets for starters
            </div>
            |
            <div className="w-[300px] text-center">
              <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
              Curated for new projects
            </div>
            |
            <div className="w-[300px] text-center">
              <i className="fa-solid fa-circle-check text-[#63E6BE]"></i> Great
              value, no compromise
            </div>
            |
            <div className="w-[300px] text-center">
              <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
              Lightweight & Efficient{" "}
            </div>
            |
            <div className="w-[300px] text-center">
              <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
              Seamless & Easy-to-Integrate
            </div>
          </div>
          <div className="mt-14 min-h-[550px] flex">
            {/* Image Section */}
            <div className="flex flex-col">
              {selectedImage && (
                <img
                  className="w-[900px] h-[500px]"
                  src={selectedImage}
                  alt="Selected"
                />
              )}
              {/* Thumbnails */}
              {asset.images && asset.images.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {asset.images.map((img, index) => (
                    <img
                      key={index}
                      className={`w-[100px] h-[80px]  transition ${
                        selectedImage === img.imageUrl
                          ? "border-2 border-white"
                          : "cursor-pointer"
                      }`}
                      src={img.imageUrl}
                      alt={`Image ${index}`}
                      onClick={() => setSelectedImage(img.imageUrl)}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* description */}
            <div className=" ml-5  w-[450px]">
              <div className=" font-semibold text-[38px]">
                {asset.productTitle}
              </div>
              <div className="border-2 my-4 border-gray-600 "></div>

              <div className=" mt-14 flex flex-col gap-y-5">
              
                <div className=" text-[25px] font-normal">
                  {" "}
                  {asset.description}{" "}
                </div>
                <div className=" text-[25px] border-b-2 border-gray-600">
                  {" "}
                  <span className="font-semibold ">Release Date:</span> {asset.releaseDate}{" "}
                </div>
                <div className="flex">
                  <button className="text-[20px] font-mono bg-white hover:scale-95 transition hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
                    Buy for {asset.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default AssetDetail;
