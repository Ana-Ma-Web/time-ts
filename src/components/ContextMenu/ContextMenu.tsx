// import { List, ListItem, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenMenu } from '../../redux/slices/interfaceSlice'
import { lineThroughTask, taskDone } from '../../redux/slices/tasksSlice'

import { List, ListItem, ListSubheader, Typography } from '@mui/material'

function ContextMenu() {

   const name = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.taskMenuData.name
   )
   const id = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.taskMenuData.id
   )

   const dispatch = useDispatch()

   const handleClose = () => {
      dispatch(setOpenMenu({ openMenu: false }))
   }

   const handleComplete = (id: number) => {
      dispatch(lineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 2000);
      handleClose()
   }

   const handleEdit = (id: number, name: string) => {
      dispatch(setOpenMenu({ openMenu: 'editMenu' }))
   }

   return (
      <List 
      subheader={<ListSubheader>{`${name}`}</ListSubheader>} 
      sx={{
         height: 225,
         width: 340,
      }}
      >
         <ListItem
            onClick={() => handleComplete(id)}
         >
            <Typography>
               Завершить
            </Typography>
         </ListItem>
         <ListItem
            onClick={() => handleEdit(id, name)}
         >
            <Typography>
               Изменить
            </Typography>
         </ListItem>
         <ListItem >
            <Typography>
               Дублировать
            </Typography>
         </ListItem>
         <ListItem >
            <Typography>
               Удалить
            </Typography>
         </ListItem>
      </List>
   );
}

export default ContextMenu