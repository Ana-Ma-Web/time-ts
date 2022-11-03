import { createSlice } from '@reduxjs/toolkit'

import { ActivityType } from '../..';


export interface ActivityState {
   activity: ActivityType[]
}

const initialState: ActivityState = {
   activity: [
      {
         id: 0,
         color: '#52D9C2',
         isAct: true,
         widget: {
            widgetIcons: [
               {
                  id: 0,
                  svgId: 1,
                  totalIntervalAmount: 2,
                  currentAmount: 2,
                  dailyEventIcons: [
                     {
                        id: 1,
                        svgId: 1,
                        hours: 16,
                        minutes: 0,
                     },
                  ],
                  reset: {
                     startingPoint: 123,
                     cycleTime: 24 * 60 * 60 * 1000,
                     ignationIndex: 0.7,
                     // isIgnition() {
                     //    // if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                     //    //    return true
                     //    // } else return false
                     // },
                     // getTimeBeforeDeadline() {
                     //    // return (resetTime.getTime() - this.startingPoint.getTime()) % this.cycleTime
                     // },
                  },
               },
               {
                  id: 1,
                  svgId: 3,
                  totalIntervalAmount: 22,
                  currentAmount: 22,
                  dailyEventIcons: null,
                  reset: {
                     startingPoint: 123,
                     cycleTime: 24 * 60 * 60 * 1000,
                     ignationIndex: 0.7,
                     // isIgnition() {
                     //    // if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                     //    //    return true
                     //    // } else return false
                     // },
                     // getTimeBeforeDeadline() {
                     //    // return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
                     // },
                  }
               },
            ],
         },
         actClock: {
            dailySchedule: {
               intervals: [
                  {
                     timeStart: 1604995200000,
                     timeEnd: 1605006000000,
                  },
                  {
                     timeStart: 1605016800000,
                     timeEnd: 1605034800000,
                  },
               ],
            },
            dailyEvent: {
               icons: [
                  {
                     id: 1,
                     svgId: 4,
                     hours: 6,
                     minutes: 0,
                  },
                  {
                     id: 2,
                     svgId: 6,
                     hours: 18,
                     minutes: 0,
                  },
               ],
            },
         },
         scheduledActivities: {
            bubbles: [{
               id: 1,
               name: 'Meow',
               color: '#5FA3CA',
               svgId: 10,
               totalTime: 60,
               recordedTime: 10,
               reset: {
                  startingPoint: 111,
                  cycleTime: 24 * 60 * 60 * 1000,
                  ignationIndex: 0.7,
                  // isIgnition() {
                  //    // if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                  //    //    return true
                  //    // } else return false
                  // },
                  // getTimeBeforeDeadline() {
                  //    // return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
                  // },
               },
            },
            ],
         },
      },
   ],

}

export const activitySlice = createSlice({
   name: 'activity',
   initialState,
   reducers: {
      incWidgetCounter(state, action) {
         const act = state.activity.find(
            act => act.id === action.payload.actId)
         const icon = act?.widget.widgetIcons?.find(
            icon => icon.id === action.payload.iconId)
         icon && icon.currentAmount++
      },
      decWidgetCounter(state, action) {
         const act = state.activity.find(
            act => act.id === action.payload.actId)
         const icon = act?.widget.widgetIcons?.find(
            icon => icon.id === action.payload.iconId)
         icon && icon.currentAmount--
      },
      addAct: (state, action) => {
      },
      getScheduleInClock: (state, action) => {

      },
   },
})

export const { incWidgetCounter, decWidgetCounter } = activitySlice.actions

export default activitySlice.reducer