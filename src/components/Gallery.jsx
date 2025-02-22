import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const imageUrls = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
]

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  // State to trigger the fade transition on the main image.
  const [loaded, setLoaded] = useState(false)

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length)
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % imageUrls.length)
  }

  const active = activeIndex
  const next1 = (activeIndex + 1) % imageUrls.length
  const next2 = (activeIndex + 2) % imageUrls.length

  // Reset the loaded state when activeIndex changes.
  useEffect(() => {
    setLoaded(false)
  }, [activeIndex])

  return (
    <div className="flex flex-col">
      <h2 className="mb-6">Gallery</h2>
      <div className="relative flex gap-4 items-center">
        <button
          onClick={prevImage}
          className="absolute left-0 z-10 p-2 rounded-full hover:bg-[#2D2D2D]"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-3 transition-all duration-500 w-full overflow-hidden">
          {/* Main image with fade transition */}
          <img
            key={active} // re-mounting triggers the onLoad each time active changes
            src={imageUrls[active]}
            alt={`Image ${active + 1}`}
            onLoad={() => setLoaded(true)}
            className={`rounded-lg transition-opacity duration-500 cursor-default w-[60%] object-cover ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />

          <img
            src={imageUrls[next1]}
            alt={`Image ${next1 + 1}`}
            onClick={() => setActiveIndex(next1)}
            className="rounded-lg transition-all duration-500 cursor-pointer w-[20%] object-cover"
          />

          <img
            src={imageUrls[next2]}
            alt={`Image ${next2 + 1}`}
            onClick={() => setActiveIndex(next2)}
            className="rounded-lg transition-all duration-500 cursor-pointer w-[20%] object-cover"
          />
        </div>

        <button
          onClick={nextImage}
          className="absolute right-0 p-2 rounded-full hover:bg-[#2D2D2D]"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
