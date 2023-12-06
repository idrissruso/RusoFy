import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    },
  },
})

export const { changeTheme } = themeSlice.actions

export function getTheme(state) {
  return state.theme.theme
}

export default themeSlice.reducer
