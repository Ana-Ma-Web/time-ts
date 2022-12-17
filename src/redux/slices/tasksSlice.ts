import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TaskType } from '../..';


export interface TaskState {
   tasks: TaskType[]
}

const initialState: TaskState = {
   tasks: [
      {
         date: 345678,
         isDone: false,
         isLineThrough: false,
         isExpanded: true,
         color: 'pink',
         name: 'meow 1 lvl',
         description: '',
         reset: null,
         childrens: [{
            date: 1234,
            isDone: false,
            isLineThrough: false,
            isExpanded: true,
            color: 'wheat',
            name: 'meow 2 lvl',
            description: '',
            reset: null,
            childrens: [{
               date: 4321,
               isDone: false,
               isLineThrough: false,
               isExpanded: true,
               color: 'pink',
               name: 'meow 3 lvl',
               description: '',
               reset: null,
               childrens: null,
            }],
         }]
      },
      {
         date: 666,
         isDone: false,
         isLineThrough: false,
         isExpanded: true,
         color: 'pink',
         name: 'meow 1 lvl',
         description: '',
         reset: null,
         childrens: null,
      },
   ],
}

const createNewTask = (color: string, name: string) => {
   return ({
      date: (new Date()).getTime(),
      isDone: false,
      isLineThrough: false,
      isExpanded: true,
      color: color,
      name: name,
      description: '',
      reset: null,
      childrens: null,
   })
}

export const tasksSlice = createSlice({
   name: 'tasks',
   initialState,
   reducers: {
      taskAdd: (state, action) => {
         state.tasks.push(
            createNewTask(action.payload.color, action.payload.name)
         )
      },
      addSubTask: (state, action) => {
         const pushTask = (item: TaskType) => {
            if (item.childrens !== null) {
               item.childrens.push(
                  createNewTask(action.payload.color, action.payload.name)
               )
            } else {
               item.childrens = [
                  createNewTask(action.payload.color, action.payload.name)
               ]
            }
         }
         const find = (date: number, items: TaskType[]) => {
            items.forEach((item: TaskType) => {
               if (item.date === date) {
                  pushTask(item)
               } else if (item.childrens !== null) {
                  find(date, item.childrens)
               }
            })
         }
         find(action.payload.date, state.tasks)
      },
      editTask: (state, action) => {
         const find = (date: number, items: TaskType[]) => {
            items.forEach((item: TaskType) => {
               if (item.date === date) {
                  item.name = action.payload.name
                  item.description = action.payload.description
                  item.color = action.payload.color
               } else if (item.childrens !== null) {
                  find(date, item.childrens)
               }
            })
         }
         find(action.payload.date, state.tasks)
      },

      toggleLineThroughTask: (state, action) => {
         const find = (date: number, items: TaskType[]) => {
            items.forEach((item: TaskType) => {
               if (item.date === date) {
                  item.isLineThrough = !item.isLineThrough
               } else if (item.childrens !== null) {
                  find(date, item.childrens)
               }
            })
         }
         find(action.payload.date, state.tasks)
      },
      toggleExpandTask: (state, action) => {
         const find = (date: number, items: TaskType[]) => {
            items.forEach((item: TaskType) => {
               if (item.date === date) {
                  item.isExpanded = !item.isExpanded
               } else if (item.childrens !== null) {
                  find(date, item.childrens)
               }
            })
         }
         action.payload.taskIds.forEach((task: string) => {
            find(Number(task), state.tasks)
         });
      },

      taskDone: (state, action) => {
         const find = (date: number, items: TaskType[]) => {
            items.forEach((item: TaskType) => {
               if (item.date === date) {
                  if (item.isLineThrough) {
                     item.isDone = true
                  }
               } else if (item.childrens !== null) {
                  find(date, item.childrens)
               }
            })
         }
         find(action.payload.date, state.tasks)
      },

      taskRemove: (state, action: PayloadAction<{ date: number }>) => {
         state.tasks = state.tasks.filter(
            task => task.date !== action.payload.date)
      },
   },
})

export const {
   taskAdd,
   addSubTask,
   editTask,
   taskDone,
   toggleLineThroughTask,
   toggleExpandTask,
   taskRemove,
} = tasksSlice.actions

export default tasksSlice.reducer