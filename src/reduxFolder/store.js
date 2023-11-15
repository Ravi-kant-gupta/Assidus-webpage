import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import counterSlice from './countersclice'
export const store = configureStore({
  reducer: {dataList:counterSlice},
})

