import React, { useState } from 'react';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import {taskAdd} from './../../redux/slices/tasksSlice'

import { TaskType } from '../..';
import Widget from '../Widget/Widget';
import './Tasks.css'
import Task from './Task';



function Tasks() {

   const [text, setText] = useState('')
   const dispatch = useDispatch()

   // const { iconsInWidget } = React.useContext(TasksContext)

   const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
      task => task.isDone === false
   )

   const inputClear = () => {
      setText('')
   }

   const createNewTask = (name: string, color: string) => {
      if (name !== '') {
      dispatch(taskAdd({name, color}))
      inputClear()}
   }

return (
      <div className='Tasklist block'>
         {/* <Widget iconsActs={iconsInWidget} /> */}
         <ul className='Tasklist_list'>
            {
               tasks.map((item: TaskType) => (
                  <div key={item.date}>
                     <Task task={item} inputText={text} inputClear={inputClear}/>
                  </div>
               ))
            }
         </ul>
         <label>
            <input value={text} onChange={(e) => setText(e.target.value)}
            type="text" placeholder="add task" />
            <button onClick={() => createNewTask(text, 'white')}>Add task</button>
         </label>
      </div>
   )
}

export default Tasks