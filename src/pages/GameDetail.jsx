import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productService from "../api/productService"
import { useCart } from "../context/CartContext"

const ImageGallery = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  if (images.length === 0) return null

  return (
    <div>
      <div className="max-w-[500px] rounded-[5px]">
        <img
          src={images[activeIndex].imageUrl}
          alt={`Main image ${activeIndex + 1}`}
          className="w-full aspect-[16/9] object-cover rounded-[5px]"
        />
      </div>

      <div className="grid grid-cols-5 gap-[5px] mt-[5px]">
        {images.map((img, index) => (
          <div
            key={img.id || index}
            className={`relative cursor-pointer rounded-md overflow-hidden ${
              activeIndex === index ? "border-2 border-[#4CC2FF]" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={img.imageUrl}
              alt={`Thumbnail ${index + 1}`}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const GameDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await productService.getProductById(id)
        setGame(response.data)
      } catch (error) {
        console.error("Error fetching game:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGame()
  }, [id])

  useEffect(() => {
    console.log(game)
  }, [game])

  if (loading) return <p>Loading...</p>
  if (!game) return <p>Game not found</p>

  return (
    <div className="mt-[84px] p-[24px]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-[27px] pt-[6px] pb-[21px] font-medium">
          {game.productTitle}
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          <ImageGallery images={game.images} />

          <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px] text-[14px] flex flex-col justify-between">
            <div>
              <p className="text-gray-300 mb-[39px]">{game.description}</p>

              <div className="flex gap-[16px]">
                <div className="flex flex-col gap-[5px]">
                  <p>Reviews</p>
                  <p>Release date</p>
                  <p>Last updated</p>
                </div>

                <div className="text-gray-300 flex flex-col gap-[5px]">
                  <p>WIP</p>
                  <p>{game.releaseDate}</p>
                  <p>{game.updateAt}</p>
                </div>
              </div>
            </div>

            <button
              className="max-w-[135px] h-[32px] bg-white text-black font-medium rounded-[5px] mt-[32px] hover:opacity-75"
              onClick={() => {
                addToCart(game)
                window.location.href = "/checkout"
              }}
              s
            >
              Buy for {game.price === 0 ? "Free" : `$${game.price}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetail
