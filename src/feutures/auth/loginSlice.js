import { createSlice } from '@reduxjs/toolkit'

const activeUser = localStorage.getItem('activeUser')

const initialState = {
  user: activeUser ? activeUser : null,
  userId: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      return { ...state, user: action.payload }
    },
    logout(state, action) {
      return { ...state, user: null }
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
