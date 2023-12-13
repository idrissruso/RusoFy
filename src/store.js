import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'
import loadingSlice from './reducers/loadingSlice'

const store = configureStore({
  reducer: {
    theme: themeSlice,
    loading: loadingSlice,
  },
})

export default store
