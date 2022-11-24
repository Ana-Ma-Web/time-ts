import { createSlice } from '@reduxjs/toolkit'

export interface InterfaceState {
   taskBlock: {
      isOpenMenu: boolean
      task: {
         id: number
         name: string
      }
   }
}

const initialState: InterfaceState = {
   taskBlock: {
      isOpenMenu: false,
      task: {
         id: 0,
         name: '',
      },
   }
}

export const interfaceSlice = createSlice({
   name: 'interface',
   initialState,
   reducers: {
      menuToggle(state, action) {
         state.taskBlock.isOpenMenu = action.payload.isOpenMenu
      },
      setMenuData(state, action) {
         if (state.taskBlock.task) {
            state.taskBlock.task.name = action.payload.name
            state.taskBlock.task.id = action.payload.id
         }
      }
   },
})


export const { menuToggle, setMenuData } = interfaceSlice.actions

export default interfaceSlice.reducer