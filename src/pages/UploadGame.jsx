import React from "react"

const UploadGame = () => {
  return (
    <div>
      <div className="text-[27px] pt-[6px] pb-[21px] font-medium">
        Upload a Game
      </div>

      <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px] text-[14px] flex flex-col justify-between">
        <form>
          <div className="flex gap-[20px] w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
                <label>Name</label>
                <input className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white" />
              </div>

              <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
                <label>Description</label>
                <input className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white" />
              </div>

              <div className="max-w-[500px] w-full flex justify-between gap-[24px] items-center">
                <label>Price</label>
                <input className="px-[10px] rounded-[5px] w-[280px] bg-inherit border h-[36px] outline-none border-gray-500 focus:border-white" />
              </div>
            </div>
          </div>

          <button className="max-w-[135px] w-full h-[32px] bg-white text-black font-medium rounded-[5px] mt-[32px] hover:opacity-75">
            Upload
          </button>
        </form>
      </div>
    </div>
  )
}

export default UploadGame
