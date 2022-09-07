import React from 'react';
import { ActivityType, TaskListType, TaskType } from '../..';
import './Tasks.css'

class Tasks extends React.Component<any, any> {
   constructor(props: any) {
      super(props)
      this.state = {}
   }

   itemsCount() {
      this.props.map((act: ActivityType, id: number) => (
         act.taskList.tasks.map((item: TaskType, id: number) => (
            this.printListItem(item)
         ))
      ))

   }

   printListItem(item: any, id?: number) {
      let children = null
      if (item.childrens !== null) {
         children = (
            <ul className='Tasklist_step'>
               {item.childrens.map((i: any, id: number) => (
                  this.printListItem(i, id)
               ))}
            </ul>
         )
      }
      return (
         <li className='Tasklist_item' key={id} style={{ color: item.color }}>
            <button className='Tasklist_button' style={{ color: item.color }}>
               {item.name}
            </button>
               {children}
         </li>
      )
   }

   printList(act: ActivityType) {
      act.taskList.tasks.map((i: TaskType, id: number) => (
         this.printListItem(i)
      ))
   }


   render() {
      return (
         <div className='Tasklist block'>

            <ul className='Tasklist_list'>
               {
                  this.props.activity.map((act: ActivityType, id: number) => (
                     act.taskList.tasks.map((i: TaskType, id: number) => (
                        this.printListItem(i)
                     ))
                  ))
               }
            </ul>
         </div>
      )
   }
}

export default Tasks