import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setIsOpenTaskInput } from '../../../redux/slices/interfaceSlice';

// import { ClickAwayListener, IconButton, makeStyles, TextField } from '@material-ui/core'
// import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { taskAdd } from '../../../redux/slices/tasksSlice';

import { ClickAwayListener, IconButton, TextField } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import { Height } from '@material-ui/icons';

// const useStyles = makeStyles({
//    root: {
//       color: 'blue'
//    },
//    'input-label': {
//       textOverflow: 'ellipsis',
//       whiteSpace: 'nowrap',
//       overflow: 'hidden',
//       width: '100%',
//       color: 'red'
//    },
//    'input': {
//       '&::placeholder': {
//          textOverflow: 'ellipsis !important',
//          color: 'blue'
//       }
//    }
// });

function TaskInput() {

   const dispatch = useDispatch()
   const isOpenTaskInput = useSelector((state: RootState) =>
      state.interface.taskBlock.addTask.isOpenTaskInput
   )

   // const classes = useStyles()

   const openTaskInput = () => {
      dispatch(setIsOpenTaskInput({ isOpenTaskInput: true }))
   }
   const closeTaskInput = () => {
      dispatch(setIsOpenTaskInput({ isOpenTaskInput: false }))
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
                  size="small"
                  label="Add task"
                  InputLabelProps={{
                     style: {
                        color: '#57648f',
                     }
                  }}
                  InputProps={{
                     style: {
                        color: '#EAEDF7',
                     }
                  }}
                  placeholder="Task name"
                  multiline
                  color="primary"
                  value={text}
                  onChange={handleChande}
                  onKeyDown={keyDownHandler}
               />
            </ClickAwayListener>
         ) : (
            <IconButton onClick={() => openTaskInput()}>
               <AddRoundedIcon />
            </IconButton>
         )}
      </>
   )
}

export default TaskInput