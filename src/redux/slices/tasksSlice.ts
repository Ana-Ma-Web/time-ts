import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TaskType } from '../..';


export interface CounterState {
   tasks: TaskType[]
}

const initialState: CounterState = {
   tasks: [
      {
         date: (new Date()).getTime(),
         isDone: false,
         isLineThrough: false,
         color: 'pink',
         name: 'meow 1 lvl',
         description: '',
         reset: null,
         childrens: [{
            date: 1234,
            isDone: false,
            isLineThrough: false,
            color: 'pink',
            name: 'meow 2 lvl',
            description: '',
            reset: null,
            childrens: [{
               date: 4321,
               isDone: false,
               isLineThrough: false,
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
         color: 'pink',
         name: 'meow 1 lvl',
         description: '',
         reset: null,
         childrens: []
      },
   ],
}

const createNewTask = (color: string, name: string) => {
   return ({
      date: (new Date()).getTime(),
      isDone: false,
      isLineThrough: false,
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
         const find = (date: number, items: any) => {
            items.forEach((item: TaskType) => {
               if (item.date === date) {
                  pushTask(item)
               } else if (item.childrens !== null){
                  find(date, item.childrens)
               }
            })
         }

         find(action.payload.date, state.tasks)
      },
      lineThroughTask: (state, action) => {
         const curTask = state.tasks.find(
            task => task.date === action.payload.date);
         if (curTask) {
            curTask.isLineThrough = !curTask.isLineThrough
         }
      },
      taskDone: (state, action) => {
         const curTask = state.tasks.find(
            task => task.date === action.payload.date
         )
         if (curTask?.isLineThrough) {
            curTask.isDone = true
         }
      },
      taskRemove: (state, action: PayloadAction<{ date: number }>) => {
         state.tasks = state.tasks.filter(
            task => task.date !== action.payload.date)
      },
   },
})

export const { taskAdd, addSubTask, taskDone, lineThroughTask, taskRemove } = tasksSlice.actions

export default tasksSlice.reducer