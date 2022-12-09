// import { List, ListItem, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsOpenMenu } from '../../redux/slices/interfaceSlice'
import { lineThroughTask, taskDone } from '../../redux/slices/tasksSlice'

import { List, ListItem, ListSubheader, Typography } from '@mui/material'

function ContextMenu() {

   const name = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.task.name
   )
   const id = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.task.id
   )

   const dispatch = useDispatch()

   const handleClose = () => {
      dispatch(setIsOpenMenu({ isOpenMenu: false }))
   }

   const handleComplete = (id: number) => {
      dispatch(lineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 2000);
      handleClose()
   }

   return (
      <List subheader={<ListSubheader>{`${name}`}</ListSubheader>} >
         <ListItem
            onClick={() => handleComplete(id)}
         >
            <Typography>
               Завершить
            </Typography>
         </ListItem>
         <ListItem >
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