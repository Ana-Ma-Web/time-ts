import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEditTaskMenuId, setOpenMenu, setTaskContextMenuData, toggleContextmenu } from '../../redux/slices/interfaceSlice'
import { toggleLineThroughTask, taskDone } from '../../redux/slices/tasksSlice'

import { Menu, MenuItem, } from '@mui/material'

function ContextMenu() {
   const dispatch = useDispatch()

   const id = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.contextMenu.contextMenuTaskId
   )

   const isContextMenuOpen = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.contextMenu.isOpen
   )
   const anchorPosition = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.contextMenu.contextMenuPosition)

   const handleClose = () => {
      dispatch(setTaskContextMenuData({
         id: 0,
         position: null,
      }))
      dispatch(toggleContextmenu({}))
   }

   const handleComplete = (e: React.MouseEvent<HTMLElement>, id: number) => {
      e.stopPropagation()
      dispatch(toggleLineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 3000);
      handleClose()
   }

   const handleEdit = (e: React.MouseEvent<HTMLElement>, id: number) => {
      e.stopPropagation()
      dispatch(setEditTaskMenuId({id}))
      dispatch(setOpenMenu({ menuTypeOpen: 'editMenu' }))
      dispatch(toggleContextmenu({}))
   }

   return (
            <Menu 
            open={isContextMenuOpen}
            onClose={handleClose}
            anchorReference='anchorPosition'
            anchorPosition={
               anchorPosition !== null 
               ? {top: anchorPosition.mouseY, left: anchorPosition.mouseX}
               : undefined
            }
            elevation={5}
            >
               <MenuItem onClick={(e) => handleComplete(e, id)}>Завершить</MenuItem>
               <MenuItem onClick={(e) => handleEdit(e, id)}>Изменить</MenuItem>
               <MenuItem onClick={() => { }}>Дублировать</MenuItem>
               <MenuItem onClick={() => { }}>Удалить</MenuItem>
            </Menu>
   );
}

export default ContextMenu