import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskType } from '../..'
import {
   setEditTaskMenuName,
   setEditTaskMenuDescription,
   setOpenMenu,
   setTaskContextMenuData,
   setEditTaskMenuColor
} from '../../redux/slices/interfaceSlice'
import { editTask } from '../../redux/slices/tasksSlice'
import { RootState } from '../../redux/store'
import ColorInput from '../ColorInput/ColorIntup'

type Props = {
   type: 'task' | 'activity'
}

export default function EditMenu(props: Props) {

   const dispatch = useDispatch()

   const taskFind = (date: number, items: TaskType[]): TaskType => {
      let foundItem = items[0]

      const subtaskFind = (date: number, items: TaskType[]) => {
         items.forEach((item: TaskType) => {
            if (item.date === date) {
               foundItem = item
            } else if (item.childrens !== null) {
               subtaskFind(date, item.childrens)
            }
         })
      }
      subtaskFind(date, items)
      return foundItem
   }

   const id = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.editMenuData.id
   )
   const task = useSelector((state: RootState) =>
      taskFind(id, state.tasks.tasks)
   )

   const newTaskColor = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.editMenuData.newColor
   )
   const taskColor = task ? task.color : ''
   const textColor = newTaskColor === '' ? taskColor : newTaskColor

   const newNameText = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.editMenuData.newName
   )
   const nameText = newNameText === '' ? task.name : newNameText

   const newDescriptionText = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.editMenuData.newDescription
   )
   const descriptionText = newDescriptionText === '' ?
      task.description :
      newDescriptionText

   const handleNameChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      dispatch(setEditTaskMenuName({ name: e.target.value }))
   }
   const handleDescriptionChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      dispatch(setEditTaskMenuDescription({ description: e.target.value }))
   }

   const clearMenuData = () => {
      dispatch(setTaskContextMenuData({
         id: 0,
         position: null,
      }))
      dispatch(setEditTaskMenuName({
         name: '',
      }))
      dispatch(setEditTaskMenuDescription({
         description: '',
      }))
      dispatch(setEditTaskMenuColor({
         color: '',
      }))
   }

   const handleSubmit = () => {
      dispatch(editTask({
         date: id,
         name: nameText,
         description: descriptionText,
         color: textColor,
      }))
      clearMenuData()
      dispatch(setOpenMenu({ menuTypeOpen: false }))
   }
   const handleCancel = () => {
      clearMenuData()
      dispatch(setOpenMenu({ menuTypeOpen: false }))
   }

   return (
      <Box
         sx={{
            height: 225,
            width: 340,
         }}
      >
         <Stack spacing={4}>
            <Typography variant='caption'>{task?.name}</Typography>
            <TextField
               id="input-name"
               variant='standard'
               fullWidth
               color='primary'
               placeholder="Task name"
               sx={{ input: { color: textColor } }}
               value={nameText}
               onChange={handleNameChange}
            />
            <TextField
               id="input-description"
               variant='standard'
               fullWidth
               color='primary'
               placeholder="Task description"
               sx={{ input: { color: textColor } }}
               value={descriptionText}
               onChange={handleDescriptionChange}
            />
            <ColorInput type='task' startColor={taskColor} />
            <Stack direction='row' spacing={4}>
               <Button fullWidth onClick={() => { handleSubmit() }}
                  variant="contained" color="success"
               >OK</Button>
               <Button fullWidth onClick={() => { handleCancel() }}
                  variant="contained" color="error"
               >CANCEL</Button>
            </Stack>
         </Stack>
      </Box>
   )
}
