import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InterfaceState {
   taskBlock: {
      menu: {
         menuTypeOpen: false | 'editMenu'
         contextMenu: {
            isOpen: boolean
            contextMenuTaskId: number
            contextMenuTaskName: string
            contextMenuTaskColor: string
            contextMenuPosition: {
               mouseX: number
               mouseY: number
            } | null
         }
         editMenuData: {
            id: number
            newName: string
            newDescription: string
            newColor: string
         }
      }
      addRootTask: {
         isOpenTaskInput: boolean
      }
      addSubTask: [
         {
            subTaskId: number
            isOpenSubTaskInput: boolean
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
            contextMenuTaskName: '',
            contextMenuTaskColor: '',
            contextMenuPosition: null,
         },
         editMenuData: {
            id: 0,
            newName: '',
            newDescription: '',
            newColor: '',
         },
      },
      addRootTask: {
         isOpenTaskInput: false,
      },
      addSubTask: [
         {
            subTaskId: 0,
            isOpenSubTaskInput: false,
         },
      ]
   },
}

export const interfaceSlice = createSlice({
   name: 'interface',
   initialState,
   reducers: {
      setOpenMenu(state, action: PayloadAction<{
         menuTypeOpen: false | 'editMenu'
      }>) {
         state.taskBlock.menu.menuTypeOpen = action.payload.menuTypeOpen
      },
      toggleContextmenu(state, action) {
         state.taskBlock.menu.contextMenu.isOpen =
            !state.taskBlock.menu.contextMenu.isOpen
      },
      setTaskContextMenuData(state, action: PayloadAction<{
         id: number
         name: string
         color: string
         position: {
            mouseX: number
            mouseY: number
         } | null
      }>) {
         state.taskBlock.menu.contextMenu.contextMenuTaskId = action.payload.id
         state.taskBlock.menu.contextMenu.contextMenuTaskName = action.payload.name
         state.taskBlock.menu.contextMenu.contextMenuTaskColor = action.payload.color
         state.taskBlock.menu.contextMenu.contextMenuPosition = action.payload.position
      },

      setEditTaskMenuId(state, action: PayloadAction<{
         id: number
      }>) {
         state.taskBlock.menu.editMenuData.id = action.payload.id
      },
      setEditTaskMenuName(state, action: PayloadAction<{
         name: string
      }>) {
         state.taskBlock.menu.editMenuData.newName = action.payload.name
      },
      setEditTaskMenuColor(state, action: PayloadAction<{
         color: string
      }>) {
         state.taskBlock.menu.editMenuData.newColor = action.payload.color
      },
      setEditTaskMenuDescription(state, action: PayloadAction<{
         description: string
      }>) {
         state.taskBlock.menu.editMenuData.newDescription =
            action.payload.description
      },

      setIsOpenRootTaskInput(state, action: PayloadAction<{
         isOpenTaskInput: boolean
      }>) {
         state.taskBlock.addRootTask.isOpenTaskInput = action.payload.isOpenTaskInput
      },

      setIsOpenSubTaskInput(state, action: PayloadAction<{
         subTaskId: number
         isOpenSubTaskInput: boolean
      }>) {
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
            })
         }
      },
   },
})

export const {
   setOpenMenu,
   toggleContextmenu,
   setTaskContextMenuData,
   setEditTaskMenuId,
   setEditTaskMenuName,
   setEditTaskMenuColor,
   setEditTaskMenuDescription,
   setIsOpenRootTaskInput,
   setIsOpenSubTaskInput,
} = interfaceSlice.actions

export default interfaceSlice.reducer