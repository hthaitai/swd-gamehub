import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem("cart") // Clear localStorage when cart is empty
    } else {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id) // Ensure item is removed before adding again
      return [...updatedCart, item]
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
