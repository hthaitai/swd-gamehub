import React from "react"
import { useCart } from "../context/CartContext" // Import the Cart Context
import { Link } from "react-router-dom"

const Checkout = () => {
  const { cart, removeFromCart } = useCart() // Use context

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  const handleVNPayPayment = async () => {
    try {
      const response = await fetch(
        "https://your-backend.com/api/vnpay/payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // lay tu login
            // userId: currentUser.id,
            money: totalPrice * 1000,
          }),
        }
      )

      const data = await response.json()

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl
      } else {
        alert("Failed to initiate payment.")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="pt-[84px]">
      <div className="flex justify-center gap-[10px] p-[24px]">
        {/* Cart Items Section */}
        <div className="w-[1000px]">
          <div className="text-[27px] pt-[6px] pb-[21px] font-medium">
            Checkout
          </div>

          <div className="">
            {cart.length > 0 ? (
              <ul className="flex flex-col gap-[3px]">
                {cart.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="hover:bg-[#373737] bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px]"
                    >
                      <div className="flex justify-between">
                        <div className="flex">
                          <img
                            src={
                              item.images?.[0]?.imageUrl ||
                              "https://via.placeholder.com/100"
                            }
                            alt={item.productTitle}
                            className="w-[120px] h-[60px] object-cover rounded-[5px]"
                          />

                          <span className="pl-[12px]">{item.productTitle}</span>
                        </div>

                        <div className="flex flex-col justify-between">
                          <p className="text-base">
                            {item.price === 0 ? "Free" : `$${item.price}`}
                          </p>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[12px] underline text-gray-300 hover:text-white"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px] flex flex-col gap-[4px] text-[14px] justify-center items-center">
                <p className="text-gray-300">Your cart is empty.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Receipt */}
        <div className="w-[280px] flex-shrink-0 mt-[68px] text-[14px]">
          <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px]">
            <h2 className="mb-[24px] text-[20px] font-medium">Receipt</h2>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
            <button
              onClick={handleVNPayPayment}
              className="w-full h-[32px] bg-[#4CC2FF] text-black rounded-[5px] mt-[16px] hover:bg-[#49B3EA]"
            >
              Pay with VNPay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
