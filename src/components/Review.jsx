import { ThumbsDown, ThumbsUp } from "lucide-react"
import React, { useState } from "react"

const Review = ({ review, addReply }) => {
  const [replyText, setReplyText] = useState("")
  const [showReplyBox, setShowReplyBox] = useState(false)

  return (
    <div className="mb-6">
      <div className="flex gap-3">
        <img className="border w-10 h-10 rounded-full" alt="User Avatar" />

        <div className="w-full">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{review.author}</p>
            <p className="text-xs text-gray-400">{review.date}</p>
          </div>

          <p className="text-sm pb-3">{review.text}</p>

          <div className="flex gap-3 text-xs">
            <div className="flex items-center gap-1 cursor-pointer">
              <ThumbsUp size={16} />
              <p className="text-gray-300">{review.likes}</p>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <ThumbsDown size={16} />
              <p className="text-gray-300">{review.dislikes}</p>
            </div>

            <button
              onClick={() => setShowReplyBox(!showReplyBox)}
              className="hover:underline"
            >
              Reply
            </button>
          </div>

          {showReplyBox && (
            <div className="flex gap-3 my-3 text-sm">
              <img className="border w-8 h-8 rounded-full" alt="User Avatar" />
              <div className="w-full flex flex-col">
                <textarea
                  placeholder="Add a reply"
                  className="resize-none overflow-hidden bg-inherit text-sm border-b focus:outline-none pb-2"
                  rows="1"
                  value={replyText}
                  onChange={(e) => {
                    setReplyText(e.target.value)
                    e.target.style.height = "auto"
                    e.target.style.height = `${e.target.scrollHeight}px`
                  }}
                />
                <button
                  onClick={() => {
                    addReply(review.id, replyText)
                    setReplyText("")
                    setShowReplyBox(false)
                  }}
                  className="self-end py-2 hover:underline"
                >
                  Reply
                </button>
              </div>
            </div>
          )}

          {review.replies.length > 0 && (
            <div className="ml-10 mt-3 border-l border-gray-600 pl-4">
              {review.replies.map((reply) => (
                <div key={reply.id} className="mb-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{reply.author}</p>
                    <p className="text-xs text-gray-400">{reply.date}</p>
                  </div>

                  <p className="text-sm pb-3">{reply.text}</p>

                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <ThumbsUp size={16} />
                      <p className="text-gray-300">{review.likes}</p>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer">
                      <ThumbsDown size={16} />
                      <p className="text-gray-300">{review.dislikes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Review
