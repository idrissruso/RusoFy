import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action) {
      return { ...state, loading: action.payload }
    },
  },
})

export const selectLoading = (state) => state.loading.loading
export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer
