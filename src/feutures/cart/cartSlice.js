import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  shippingFee: 0,
  totalPrice: 0,
  tax: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      state.totalPrice = state.totalPrice + newItem.price
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          description: newItem.description,
          image: newItem.image,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
    onQuantityChange(state, action) {
      const { id, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity =
        state.totalQuantity - existingItem.quantity + quantity
      state.totalPrice =
        state.totalPrice -
        existingItem.totalPrice +
        existingItem.price * quantity
      existingItem.quantity = quantity
      existingItem.totalPrice = existingItem.price * quantity
    },
  },
})
