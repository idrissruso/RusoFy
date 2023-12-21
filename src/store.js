import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'
import loadingSlice from './reducers/loadingSlice'
import userSlice from '../src/feutures/auth/loginSlice'
import cartSlice from './feutures/cart/cartSlice'

const store = configureStore({
  reducer: {
    theme: themeSlice,
    loading: loadingSlice,
    user: userSlice,
    cartSlice: cartSlice,
  },
})

export default store
