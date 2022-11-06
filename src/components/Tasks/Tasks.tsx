import React, { useState } from 'react';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { taskAdd } from './../../redux/slices/tasksSlice'

import { TaskType } from '../..';
import Widget from '../Widget/Widget';
import styles from './Tasks.module.css'
import Task from './Task/Task';



function Tasks() {

   const [text, setText] = useState('')
   const dispatch = useDispatch()

   const iconsInWidget = useSelector((state: RootState) => state.activity.activity).filter(
      activity => activity.widget.widgetIcons !== null
   )

   const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
      task => task.isDone === false
   )

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
            createNewTask(text, 'white')
            break;
         case 'Escape':
            inputClear()
            break;
         default:
            break;
      }
   }

   return (
      <div className={styles.Tasks + ' block'}>
         <Widget iconsActs={iconsInWidget} />
         <ul className={styles.list}>
            {
               tasks.map((item: TaskType) => (
                  <div key={item.date}>
                     <Task task={item} inputText={text} inputClear={inputClear} />
                  </div>
               ))
            }
         </ul>
         <label>
            <input value={text} onChange={(e) => setText(e.target.value)}
               onKeyDown={keyDownHandler}
               type="text" placeholder="add task" />
            <button onClick={() => createNewTask(text, 'white')}>Add task</button>
         </label>
      </div>
   )
}

export default Tasks