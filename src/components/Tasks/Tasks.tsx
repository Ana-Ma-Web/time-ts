import React from 'react';
import { ActivityType, DataType, TaskType } from '../..';
import './Tasks.css'

class Tasks extends React.Component<DataType, any> {
   constructor(props: DataType) {
      super(props)
      this.state = {}
   }

   printListItem(item: TaskType, id: number) {
      let children = null
      if (item.childrens !== null) {
         children = (
            <ul className='Tasklist_step'>
               {item.childrens.map((item: TaskType) => (
                  this.printListItem(item, item.id)
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

   render() {
      return (
         <div className='Tasklist block'>
            <ul className='Tasklist_list'>
               {
                  this.props.activity.map((act: ActivityType) => (
                     act.taskList.tasks.map((item: TaskType) => (
                        this.printListItem(item, item.id)
                     ))
                  ))
               }
            </ul>
         </div>
      )
   }
}

export default Tasks