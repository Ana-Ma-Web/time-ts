import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setIsOpenRootTaskInput } from '../../../redux/slices/interfaceSlice';

import { taskAdd } from '../../../redux/slices/tasksSlice';

import { ClickAwayListener, IconButton, TextField } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function TaskInput() {

   const dispatch = useDispatch()
   const isOpenTaskInput = useSelector((state: RootState) =>
      state.interface.taskBlock.addRootTask.isOpenTaskInput
   )

   const openTaskInput = () => {
      dispatch(setIsOpenRootTaskInput({ isOpenTaskInput: true }))
   }
   const closeTaskInput = () => {
      dispatch(setIsOpenRootTaskInput({ isOpenTaskInput: false }))
   }

   const [text, setText] = useState('')

   const handleChande = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setText(e.target.value)
   }

   const inputClear = () => {
      setText('')
   }

   const createNewTask = (name: string, color: string) => {
      if (name !== '') {
         dispatch(taskAdd({ name, color }))
         inputClear()
      }
   }

   const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.code) {
         case 'Enter':
            event.preventDefault();
            createNewTask(text, 'white')
            break;
         case 'Escape':
            text === '' ? closeTaskInput() : inputClear()
            break;
         default:
            break;
      }
   }

   return (
      <>
         {isOpenTaskInput ? (
            <ClickAwayListener onClickAway={closeTaskInput}>
               <TextField
                  id="standard-textarea"
                  variant='standard'
                  size="medium"
                  // label="Add task123123"
                  focused
                  color='primary'
                  placeholder="Task name"
                  value={text}
                  inputRef={input => input && input.focus()}
                  onChange={handleChande}
                  onKeyDown={keyDownHandler}
               />
            </ClickAwayListener>
         ) : (
            <IconButton 
            disableRipple
            onClick={() => openTaskInput()}>
               <AddRoundedIcon />
            </IconButton>
            // <CustomButton>

            // </CustomButton>
         )}
      </>
   )
}

export default TaskInput