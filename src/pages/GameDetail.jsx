import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import games from "../data/gameData"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import Review from "../components/Review"
import Gallery from "../components/Gallery"

const GameDetail = () => {
  const { id } = useParams()
  const game = games.find((g) => g.id.toString() === id)

  const [reviews, setReviews] = useState([])
  const [reviewText, setReviewText] = useState("")
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
  ]

  const addReview = () => {
    if (reviewText.trim() === "") return

    const newReview = {
      id: Date.now(),
      author: "User",
      text: reviewText,
      date: "Just now",
      likes: 0,
      dislikes: 0,
      replies: [],
    }

    setReviews([newReview, ...reviews])
    setReviewText("")
  }

  const addReply = (reviewId, replyText) => {
    if (replyText.trim() === "") return

    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              replies: [
                ...review.replies,
                {
                  id: Date.now(),
                  author: "User",
                  text: replyText,
                  date: "Just now",
                },
              ],
            }
          : review
      )
    )
  }
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
      {/* Game header */}
      <div className="py-14 relative flex justify-center px-[110px]">
        <img
          src={game.image}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,15,15,1), rgba(15,15,15,0.5), rgba(15,15,15,1))",
          }}
        ></div>

        <div className="flex flex-col items-start gap-3 max-w-[1000px] w-full mx-auto relative z-20 p-5 rounded-lg">
          <div className="flex gap-5">
            <div className="w-[158px] h-[89px]">
              <img
                src={game.image}
                className="w-full h-full bg-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium">{game.title}</p>
              <div className="flex gap-2 text-xs text-gray-300">
                <p className="border-transparent bg-gray-800 p-[4px_8px] rounded-md">
                  {game.genre}
                </p>
                <p className="border-transparent bg-gray-800 p-[4px_8px] rounded-md">
                  {game.platform}
                </p>
                <p className="border-transparent bg-gray-800 p-[4px_8px] rounded-md">
                  {game.playerSupport}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-300">{game.description}</p>

          <button className="border text-sm p-3 rounded-md bg-white text-black font-medium max-w-[120px] w-full">
            Buy for {game.price}
          </button>
        </div>
      </div>

      {/* Game details */}
      <div className="px-[110px]">
        <div className="max-w-[1000px] w-full mx-auto p-5 flex flex-col gap-4">
          {/* Gallery */}
          <div>
            <Gallery />
          </div>

          {/* Reviews */}
          <div>
            <p>Reviews</p>

            <div className="flex gap-3 my-6 text-sm">
              <img className="border w-10 h-10 rounded-full" />

              <div className="w-full flex flex-col">
                <textarea
                  placeholder="Add a review"
                  className="resize-none overflow-hidden bg-inherit text-sm border-b focus:outline-none pb-2"
                  rows="1"
                  value={reviewText}
                  onChange={(e) => {
                    setReviewText(e.target.value)
                    e.target.style.height = "auto"
                    e.target.style.height = `${e.target.scrollHeight}px`
                  }}
                />
                <button
                  onClick={addReview}
                  className="self-end py-2 hover:underline"
                >
                  Post Review
                </button>
              </div>
            </div>

            {reviews.map((review) => (
              <Review key={review.id} review={review} addReply={addReply} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetail
