import React, { useEffect, useState } from "react";
import assets from "../data/assetData";
import { useParams } from "react-router-dom";
function AssetDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const asset = assets.find((a) => a.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(asset.image);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
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
          <div className="mt-14 min-h-[550px] flex">
            {/* image */}
            <div className="  flex flex-col">
              <div className=" ">
                <img
                  className="w-[1032px] h-[500px]"
                  src={selectedImage}
                  alt="test"
                />
                {/* ảnh phụ */}
                {asset.images && asset.images.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {[asset.image, ...asset.images].map((img, index) => (
                       <img
                       key={index}
                       className={`w-[200px] h-150 cursor-pointer transition ${
                         selectedImage === img ? "border-2 border-white" : ""
                       }`}
                       src={img}
                       alt={`Image ${index}`}
                       onClick={() => setSelectedImage(img)} 
                     />
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* description */}
            <div className=" ml-5  w-[450px]">
              <div className=" font-semibold text-[38px]">{asset.title}</div>
              <div className="border-2 my-4 border-gray-600 "></div>

              <div className=" mt-14 flex flex-col gap-y-5">
                <div className="flex">
                  <button className="text-[20px] font-mono bg-white hover:scale-95 transition hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
                    Buy for {asset.price}
                  </button>
                </div>
                <div className=" text-[25px] font-normal">
                  {" "}
                  {asset.description}{" "}
                </div>
                <div className=" text-[25px] border-b-2 border-gray-600">
                  {" "}
                  <span className="font-semibold ">Downloads:</span>{" "}
                  {asset.downloads}{" "}
                </div>
                <div className=" text-[25px] border-b-2 border-gray-600">
                  {" "}
                  <span className="font-semibold ">Type:</span> {asset.type}{" "}
                </div>
                <div className=" text-[25px] ">
                  {" "}
                  <span className="font-semibold ">Uploaded:</span>{" "}
                  {asset.uploadDate}{" "}
                </div>
              </div>
            </div>
          </div>
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
              Lightweight & Efficient            </div>
            |
            <div className="w-[300px] text-center">
              <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
              Seamless & Easy-to-Integrate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetail;
