import { configureStore, createSlice } from '@reduxjs/toolkit'

const markdownSlice = createSlice({
  name: 'markdown',
  initialState: {
    markdown: '# Hello World',
  },
  reducers: {
    setMarkdown: (state, action) => {
      state.markdown = action.payload;
    },
  },
});

export const { setMarkdown } = markdownSlice.actions;

export default configureStore({
  reducer: {
    markdown: markdownSlice.reducer
  },
})
