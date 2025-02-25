import React, { useEffect, useState } from "react";
import assets from "../data/assetData";
import { useParams } from "react-router-dom";
function AssetDetail() {
  const { id } = useParams();
  const [loading,setLoading] = useState(true);
  const asset = assets.find((a) => a.id.toString() === id);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[]);
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
        {/* header */}
        <div className="flex mt-14 font-semibold text-[20px]">
          <div className="w-[300px] h-[40px] text-center">
            <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
            Essential assets for starters
          </div>
          |
          <div className="w-[300px] text-center">
            <i className="fa-solid fa-circle-check text-[#63E6BE]"></i> Curated
            for new projects
          </div>
          |
          <div className="w-[300px] text-center">
            <i className="fa-solid fa-circle-check text-[#63E6BE]"></i> Great
            value, no compromise
          </div>
          |
          <div className="w-[300px] text-center">
            <i className="fa-solid fa-circle-check text-[#63E6BE]"></i>{" "}
            High-quality picks
          </div>
        </div>
        {/* body */}
        <div className="mt-14 min-h-[800px] flex">
          {/* image */}
          <div className=" w-[800px] flex flex-col">
            <div className=" mb-5 h-[458px]">
              <img src={asset.image} alt="test" />
            </div>
          </div>
          {/* title */}
          <div className=" ml-5  w-[450px]">
            <div className=" font-semibold text-[38px]">
              {asset.title}
            </div>
            <div className="border-2 my-4 border-gray-600 "></div>

            <div className=" mt-14 flex flex-col gap-y-5">
              <div className=" text-[35px] font-mono">${asset.price}</div>
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
              <div className=" text-[25px] border-b-2 border-gray-600">
                {" "}
                <span className="font-semibold ">Uploaded:</span> {asset.uploadDate}{" "}
              </div>
              <div className=" text-[25px] border-gray-600">
                {" "}
                <span className="font-semibold ">Last Updated:</span> {asset.lastUpdated}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetail;
