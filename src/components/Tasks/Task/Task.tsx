import React from 'react';
import { useDispatch } from 'react-redux';
import { TaskType } from '../../..';
import { addSubTask, lineThroughTask, taskDone, taskRemove } from '../../../redux/slices/tasksSlice';
import styles from './Task.module.css'


type Props = {
   task: TaskType
   inputText: string
   inputClear: () => void
}

function Task(props: Props) {

   const dispatch = useDispatch()


   const taskComplete = (date: number) => {
      dispatch(lineThroughTask({ date }))

      setTimeout(() => {
         dispatch(taskDone({ date }))
      }, 2000);
   }

   const taskDelete = (date: number) => {
      dispatch(taskRemove({ date }))
   }

   const subTaskAdd = (item: TaskType) => {
      if (props.inputText !== '') {
         dispatch(addSubTask({
            date: item.date,
            color: item.color,
            name: props.inputText
         }))
         props.inputClear()
      }
   }

   const printListItem = (item: TaskType) => {
      if (item.isDone === false) {
         let children = null
         let taskDoneClassName = item.isLineThrough ? styles.done : ''

         if (item.childrens !== null) {
            children = (
               <ul className={styles.step}>
                  {
                     item.childrens.map((item: TaskType) => (
                        printListItem(item)
                     ))}
               </ul>
            )
         }
         return (
            <li className={styles.item + ' ' + taskDoneClassName} style={{ color: item.color }} key={item.date}>
               <span className={styles.text} style={{ color: item.color }}
                  onClick={() => taskComplete(item.date)}>
                  {item.name}
               </span>
               <button className={styles.delete} style={{ color: item.color }}
                  onClick={() => taskDelete(item.date)}>
                  {deleteIcon}
               </button>
               <button 
                  onClick={() => subTaskAdd(item)}>
                  {deleteIcon}
               </button>
               {children}
            </li>
         )
      }
   }

   const deleteIcon = (<svg width="15" height="15" viewBox="0 0 25 25" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10.94 10.94V2a1.5 1.5 0 1 1 2.99 0v8.95h8.96c.82 0 1.49.67 1.49 
1.5 0 .82-.67 1.49-1.5 1.49h-8.95v8.96c0 .82-.67 1.49-1.5 1.49a1.5 1.5 0 
0 1-1.49-1.5v-8.95H2a1.5 1.5 0 1 1 0-2.99h8.95Z" fill="#fff" />
   </svg>)

   return (
      <>
         <ul className={styles.list}>
            {
               printListItem(props.task)
            }
         </ul>
      </>
   )
}

export default Task