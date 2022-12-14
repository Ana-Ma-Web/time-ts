import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setIsOpenSubTaskInput } from '../../../redux/slices/interfaceSlice';

import { addSubTask, } from '../../../redux/slices/tasksSlice';

import { ClickAwayListener, TextField } from '@mui/material';

type Props = {
   id: number
   color: string
}

function TaskInput(props: Props) {
   const dispatch = useDispatch()

   const [text, setText] = useState('')
   const isOpenSubTaskInput = useSelector((state: RootState) =>
      state.interface.taskBlock.addSubTask.find(e => (
         e.subTaskId === props.id
      ))?.isOpenSubTaskInput
   )

   const closeSubTaskInput = () => {
      dispatch(setIsOpenSubTaskInput({
         isOpenSubTaskInput: false,
         subTaskId: props.id
      }))
   }

   const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setText(e.target.value)
   }

   const inputClear = () => {
      setText('')
   }

   const createNewSubTask = (name: string, color: string, date: number) => {
      if (name !== '') {
         dispatch(addSubTask({ name, color, date }))
         inputClear()
      }
   }

   const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.code) {
         case 'Enter':
            event.preventDefault();
            createNewSubTask(text, props.color, props.id)
            break;
         case 'Escape':
            text === '' ? closeSubTaskInput() : inputClear()
            break;
         default:
            break;
      }
   }

   return (
      <>
         {isOpenSubTaskInput && (
            <ClickAwayListener onClickAway={closeSubTaskInput}>
               <TextField
                  id="standard-textarea"
                  variant='standard'
                  focused
                  color='primary'
                  placeholder="Task name"
                  value={text}
                  inputRef={input => input && input.focus()}
                  onChange={handleChange}
                  onKeyDown={keyDownHandler}
               />
            </ClickAwayListener>
         )}
      </>
   )
}

export default TaskInput