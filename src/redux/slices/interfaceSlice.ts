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
      addRootTask: {
         isOpenTaskInput: boolean
         inputText: string
      }
      addSubTask: [
         {
            subTaskId: number
            isOpenSubTaskInput: boolean
            inputText: string
         },
      ]
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
      addRootTask: {
         isOpenTaskInput: false,
         inputText: '',
      },
      addSubTask: [
         {
            subTaskId: 0,
            isOpenSubTaskInput: false,
            inputText: '',
         },
      ]
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

      setIsOpenRootTaskInput(state, action) {
         state.taskBlock.addRootTask.isOpenTaskInput = action.payload.isOpenTaskInput
      },
      setRootTaskInputText(state, action) {
         state.taskBlock.addRootTask.inputText = action.payload.inputText
      },
      clearRootTaskInput(state, action) {
         state.taskBlock.addRootTask.inputText = ''
      },

      setIsOpenSubTaskInput(state, action) {
         const i = state.taskBlock.addSubTask.findIndex(e => (
            e.subTaskId === action.payload.subTaskId
            ))
            if (i >= 0) {
               const subTask = state.taskBlock.addSubTask[i]
               subTask.isOpenSubTaskInput = action.payload.isOpenSubTaskInput
         } else {
            state.taskBlock.addSubTask.push({
               subTaskId: action.payload.subTaskId,
               isOpenSubTaskInput: action.payload.isOpenSubTaskInput,
               inputText: '',
               })
         }
      },
      setSubTaskInputText(state, action) {
         const i = state.taskBlock.addSubTask.findIndex(e => (
            e.subTaskId === action.payload.subTaskId
         ))
         const subTask = state.taskBlock.addSubTask[i]
         subTask.inputText = action.payload.inputText
      },
      clearSubTaskInput(state, action) {
         const i = state.taskBlock.addSubTask.findIndex(e => (
            e.subTaskId === action.payload.subTaskId
         ))
         const subTask = state.taskBlock.addSubTask[i]
         subTask.inputText = ''
      },
   },
})

export const {
   setIsOpenMenu,
   setMenuData,
   setIsOpenRootTaskInput,
   // setRootTaskInputText,
   // clearRootTaskInput,
   setIsOpenSubTaskInput,
   setSubTaskInputText,
   clearSubTaskInput,
} = interfaceSlice.actions

export default interfaceSlice.reducer