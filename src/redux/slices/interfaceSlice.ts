import { createSlice } from '@reduxjs/toolkit'

export interface InterfaceState {
   taskBlock: {
      menu: {
         menuTypeOpen: false | 'editMenu'
         contextMenu: {
            isOpen: boolean
            contextMenuTaskId: number
         }
         taskMenuData: {
            id: number
            name: string
            color: string
         }
         editMenuData: {
            newName: string
            newDescription: string
            newColor: string
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
         menuTypeOpen: false,
         contextMenu: {
            isOpen: false,
            contextMenuTaskId: 0,
         },
         taskMenuData: {
            id: 0,
            name: '',
            color: '',
         },
         editMenuData: {
            newName: '',
            newDescription: '',
            newColor: '',
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
      setOpenMenu(state, action) {
         state.taskBlock.menu.menuTypeOpen = action.payload.menuTypeOpen
      },
      toggleContextmenu(state, action) {
         state.taskBlock.menu.contextMenu.isOpen = 
         !state.taskBlock.menu.contextMenu.isOpen
      },
      setTaskMenuData(state, action) {
            state.taskBlock.menu.taskMenuData.name = action.payload.name
            state.taskBlock.menu.taskMenuData.id = action.payload.id
            state.taskBlock.menu.taskMenuData.color = action.payload.color
      },
      setEditTaskMenuName(state, action) {
         state.taskBlock.menu.editMenuData.newName = action.payload.name
      },
      setEditTaskMenuColor(state, action) {
         state.taskBlock.menu.editMenuData.newColor = action.payload.color
      },
      setEditTaskMenuDescription(state, action) {
         state.taskBlock.menu.editMenuData.newDescription =
            action.payload.description
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
   setOpenMenu,
   toggleContextmenu,
   setTaskMenuData,
   setEditTaskMenuName,
   setEditTaskMenuColor,
   setEditTaskMenuDescription,
   setIsOpenRootTaskInput,
   setIsOpenSubTaskInput,
   setSubTaskInputText,
   clearSubTaskInput,
} = interfaceSlice.actions

export default interfaceSlice.reducer