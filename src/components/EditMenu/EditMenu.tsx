import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskType } from '../..'
import { setEditTaskMenuData, setOpenMenu, setTaskMenuData } from '../../redux/slices/interfaceSlice'
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
      state.interface.taskBlock.menu.taskMenuData.id
   )
   const task = useSelector((state: RootState) =>
      taskFind(id, state.tasks.tasks)
   )

   const newTaskColor = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.editMenuData.newColor
   )
   const taskColor = task ? task.color : ''
   const textColor = newTaskColor === '' ? taskColor : newTaskColor

   const [nameText, setNameText] = useState(task?.name)
   const [descriptionText, setDescriptionText] = useState(task?.description)

   const handleNameChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setNameText(e.target.value)
   }
   const handleDescriptionChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setDescriptionText(e.target.value)
   }
   const clearMenuData = () => {
      dispatch(setTaskMenuData({
         id: 0,
         name: '',
         color: '',
      }))
      dispatch(setEditTaskMenuData({
         name: '',
         description: '',
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
      dispatch(setOpenMenu({ openMenu: false }))
   }
   const handleCancel = () => {
      clearMenuData()
      dispatch(setOpenMenu({ openMenu: false }))
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
            // onKeyDown={keyDownHandler}
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
            // onKeyDown={keyDownHandler}
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
