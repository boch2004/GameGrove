import { configureStore } from '@reduxjs/toolkit'
import gameSlice  from './gameslice'

export default configureStore({
  reducer: {
game:gameSlice    
  }
})