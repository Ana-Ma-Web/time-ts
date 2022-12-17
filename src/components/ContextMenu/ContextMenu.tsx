import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenMenu, toggleContextmenu } from '../../redux/slices/interfaceSlice'
import { toggleLineThroughTask, taskDone } from '../../redux/slices/tasksSlice'

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
   
   const handleComplete = (e: React.MouseEvent<HTMLElement>, id: number) => {
      e.stopPropagation()
      dispatch(toggleLineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 3000);
      handleClose()
   }

   const handleEdit = (e: React.MouseEvent<HTMLElement>, id: number, name: string) => {
      e.stopPropagation()
      dispatch(setOpenMenu({ menuTypeOpen: 'editMenu' }))
      handleClose()
   }

   return (
      <>
         <ClickAwayListener onClickAway={handleClose}>
            <Menu open={props.open} anchorEl={props.anchorEl}
            elevation={5}
            >
               <MenuItem onClick={(e) => handleComplete(e, id)}>Завершить</MenuItem>
               <MenuItem onClick={(e) => handleEdit(e, id, name)}>Изменить</MenuItem>
               <MenuItem onClick={() => { }}>Дублировать</MenuItem>
               <MenuItem onClick={() => { }}>Удалить</MenuItem>
            </Menu>
         </ClickAwayListener>
      </>
   );
}

export default ContextMenu