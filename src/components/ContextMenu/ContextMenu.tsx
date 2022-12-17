import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenMenu, toggleContextmenu } from '../../redux/slices/interfaceSlice'
import { lineThroughTask, taskDone } from '../../redux/slices/tasksSlice'

import { ClickAwayListener, Menu, MenuItem, MenuProps } from '@mui/material'

function ContextMenu(props: MenuProps) {

   const name = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.taskMenuData.name
   )
   const id = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.taskMenuData.id
   )

   const dispatch = useDispatch()

   const handleClose = () => {
      dispatch(toggleContextmenu({}))
   }

   const handleComplete = (id: number) => {
      dispatch(lineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 3000);
      handleClose()
   }

   const handleEdit = (id: number, name: string) => {
      dispatch(setOpenMenu({ menuTypeOpen: 'editMenu' }))
      handleClose()
   }

   return (
      <>
         <ClickAwayListener onClickAway={handleClose}>
            <Menu open={props.open} anchorEl={props.anchorEl}
            elevation={5}
            >
               <MenuItem onClick={() => handleComplete(id)}>Завершить</MenuItem>
               <MenuItem onClick={() => handleEdit(id, name)}>Изменить</MenuItem>
               <MenuItem onClick={() => { }}>Дублировать</MenuItem>
               <MenuItem onClick={() => { }}>Удалить</MenuItem>
            </Menu>
         </ClickAwayListener>
      </>
   );
}

export default ContextMenu