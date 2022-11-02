import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice'
import activityReducer from './slices/activitySlice'

export const store = configureStore({
   reducer: {
      tasks: tasksReducer,
      activity: activityReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch