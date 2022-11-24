import { List, ListItem, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { menuToggle } from '../../redux/slices/interfaceSlice'
import { lineThroughTask, taskDone } from '../../redux/slices/tasksSlice'

const useStyles = makeStyles({
   root: {
      width: '100%',
      maxWidth: 360,
      overflow: 'auto',
   },
   item: {
      paddingTop: 0,
      paddingBottom: 0,
   }
},);

function ContextMenu() {

   const name = useSelector((state: RootState) =>
      state.interface.taskBlock.task.name
   )
   const id = useSelector((state: RootState) =>
      state.interface.taskBlock.task.id
   )

   const dispatch = useDispatch()

   const classes = useStyles();

   const handleClose = () => {
      dispatch(menuToggle({ isOpenMenu: false }))
   }

   const handleComplete = (id: number) => {
      dispatch(lineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 2000);
      handleClose()
   }

   return (
      <List subheader={<ListSubheader>{`${name}`}</ListSubheader>} className={classes.root}>
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