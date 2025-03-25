import React from "react"
import { useCart } from "../context/CartContext" // Import the Cart Context

const Checkout = () => {
  const { cart, removeFromCart } = useCart() // Use context

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  const handleVNPayPayment = () => {
    window.location.href = `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?amount=${
      totalPrice * 1000
    }`
  }

  return (
    <div className="pt-[84px]">
      <div className="flex justify-center gap-[16px] p-[24px]">
        {/* Cart Items Section */}
        <div className="w-[1000px]">
          <div className="text-[27px] pt-[6px] pb-[21px] font-medium">
            Checkout
          </div>
          <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px]">
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item) => {
                  console.log("Cart Item:", item) // Debugging log
                  return (
                    <li
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-3">
                        <img
                          src={
                            item.images?.[0]?.imageUrl ||
                            "https://via.placeholder.com/100"
                          }
                          alt={item.productTitle}
                          className="w-[50px] h-[50px] rounded-md object-cover"
                        />
                        <span>{item.productTitle}</span>
                      </div>
                      <span>${item.price}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 ml-4"
                      >
                        Remove
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>

        {/* Sidebar - Receipt */}
        <div className="w-[280px] flex-shrink-0 mt-[68px]">
          <div className="bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px] p-[24px]">
            <h2 className="text-[20px] mb-4 font-medium">Receipt</h2>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
            <button
              onClick={handleVNPayPayment}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
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
