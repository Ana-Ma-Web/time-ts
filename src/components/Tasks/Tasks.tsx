import React from 'react';
import { TaskType } from '../..';
import { TasksContext } from '../../App';
import Widget from '../Widget/Widget';
import './Tasks.css'


function Tasks() {

   const {tasks, iconsInWidget, completeTask, addTask} = React.useContext(TasksContext)

   const printListItem = (item: TaskType, date: number) => {
      let children = null
      if (item.childrens !== null) {
         children = (
            <ul className='Tasklist_step'>
               {item.childrens.map((item: TaskType) => (
                  printListItem(item, item.date)
               ))}
            </ul>
         )
      }
      return (
         <li className='Tasklist_item' key={date} style={{ color: item.color }}
         onClick={() => completeTask(date)}>
            <button className='Tasklist_button' style={{ color: item.color }}>
               {item.name}
            </button>
            {children}
         </li>
      )
   }

   let createNewTask = () => {
      return {
         date: (new Date()).getTime(),
         isDone: false,
         color: 'pink',
         name: 'newMeow',
         description: '',
         reset: null,
         childrens: null,
      }
   }

   return (
      <div className='Tasklist block'>
         <Widget iconsActs={iconsInWidget} />
         <ul className='Tasklist_list'>
            {
               tasks.map((item: TaskType) => (
                  printListItem(item, item.date)
               ))
            }
         </ul>
         <label>
            <input onChange={(event) => console.log(event.target.value)}
            type="text" placeholder="add task" />
            <button onClick={() => addTask(createNewTask())}>Add task</button>
         </label>
      </div>
   )
}

export default Tasks