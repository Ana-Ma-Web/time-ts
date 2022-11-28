import { createSlice } from '@reduxjs/toolkit'

export interface InterfaceState {
   taskBlock: {
      menu: {
         isOpenMenu: boolean
         task: {
            id: number
            name: string
         }
      }
      addTask: {
         isOpenTaskInput: boolean
         inputText: string
      }
   }
}

const initialState: InterfaceState = {
   taskBlock: {
      menu: {
         isOpenMenu: false,
         task: {
            id: 0,
            name: '',
         },
      },
      addTask: {
         isOpenTaskInput: false,
         inputText: '',
      },
   },

}

export const interfaceSlice = createSlice({
   name: 'interface',
   initialState,
   reducers: {
      setIsOpenMenu(state, action) {
         state.taskBlock.menu.isOpenMenu = action.payload.isOpenMenu
      },
      setMenuData(state, action) {
         if (state.taskBlock.menu.task) {
            state.taskBlock.menu.task.name = action.payload.name
            state.taskBlock.menu.task.id = action.payload.id
         }
      },
      setIsOpenTaskInput(state, action) {
         state.taskBlock.addTask.isOpenTaskInput = action.payload.isOpenTaskInput
      },
      setTaskInputText(state, action) {
         state.taskBlock.addTask.inputText = action.payload.inputText
      },
      clearTaskInput(state, action) {
         state.taskBlock.addTask.inputText = ''
      },
   },
})


export const {
   setIsOpenMenu,
   setMenuData,
   setIsOpenTaskInput,
   setTaskInputText,
   clearTaskInput
} = interfaceSlice.actions

export default interfaceSlice.reducer