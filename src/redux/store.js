import { configureStore } from '@reduxjs/toolkit'

import books from "../reducers/add-book-slice";

export default configureStore({
  reducer: {books},
})  