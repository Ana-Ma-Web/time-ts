import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export type IconTimeType = number | null
export type IconsType = {
  svgId: number,
  hours: IconTimeType,
  minutes: IconTimeType,

}
export type TaskType = {
  id: number,
  color: string,
  name: string,
  description: string,
  reset: ResetType,
  childrens: TaskType[] | null
}
export type TaskListType = {
  isInTaskList: boolean,
  tasks: Array<TaskType>
}
export type WidgetIconsType = {
  id: number,
  svgId: number,
  count: number,
  reset: ResetType,
}
export type TaskWidgetType = {
  isInTaskWidget: boolean,
  widgetIcons: Array<WidgetIconsType> | null,
}
export type IntervalType = Date | null
export type IntervalsType = {
  timeStart: IntervalType,
  timeEnd: IntervalType,
}
export type DailyScheduleType = {
  isInDailySchedule: boolean,
  intervals: Array<IntervalsType> | null
}
export type DailyEventType = {
  isInDailyEvent: boolean,
  icons: Array<IconsType> | null,
}
export type ActClockType = {
  dailySchedule: DailyScheduleType,
  dailyEvent: DailyEventType,

}
export type ResetType = {
  startingPoint: Date,
  cycleTime: number,
  ignationIndex: number,
  isIgnition: Function,
  getTimeBeforeDeadline: Function,
}
export type BubbleType = {
  id: number,
  name: string,
  svgId: number,
  totalTime: number,
  recordedTime: number,
  reset: ResetType,
  color: string,

}
export type ScheduledActivitiesType = {
  isInScheduledActivities: boolean,
  bubbles: BubbleType[],
}
export type ActivityType = {
  id: number;
  color: string;
  isAct: boolean;
  taskList: TaskListType,
  taskWidget: TaskWidgetType,
  actClock: ActClockType,
  scheduledActivities: ScheduledActivitiesType,

  // intervals: Array<IntervalsType> | null;
}
export type DataType = {
  activity: ActivityType[],
}

let data: DataType = {
  activity: [
    {
      id: 0,
      color: '#5FA3CA',
      isAct: true,
      taskList: {
        isInTaskList: true,
        tasks: [{
          id: 0,
          color: '#5FA3CA',
          name: 'meowmeow 1 lvl Meow!! Meowmeow meow!',
          description: 'Meow!! Meowmeow meow!',
          reset: {
            startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
            cycleTime: 24 * 60 * 60 * 1000,
            ignationIndex: 0.7,
            isIgnition() {
              if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                return true
              } else return false
            },
            getTimeBeforeDeadline() {
              return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
            },
          },
          childrens: [{
            id: 1,
            color: '#5FA3CA',
            name: 'meowmeow 2 lvl',
            description: 'Meow!! Meowmeow meow!',
            reset: {
              startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
              cycleTime: 365 * 24 * 60 * 60 * 1000,
              ignationIndex: 0.7,
              isIgnition() {
                if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                  return true
                } else return false
              },
              getTimeBeforeDeadline() {
                return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
              },
            },
            childrens: [{
              id: 3,
              color: '#5FA3CA',
              name: 'meowmeow 3 lvl',
              description: 'Meow!! Meowmeow meow!',
              reset: {
                startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
                cycleTime: 365 * 24 * 60 * 60 * 1000,
                ignationIndex: 0.7,
                isIgnition() {
                  if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                    return true
                  } else return false
                },
                getTimeBeforeDeadline() {
                  return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
                },
              },
              childrens: null,
            },],
          },],
        },
        {
          id: 2,
          color: '#5FA3CA',
          name: 'meowmeow 1 lvl',
          description: 'Meow!! Meowmeow meow!',
          reset: {
            startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
            cycleTime: 365 * 24 * 60 * 60 * 1000,
            ignationIndex: 0.7,
            isIgnition() {
              if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                return true
              } else return false
            },
            getTimeBeforeDeadline() {
              return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
            },
          },
          childrens: null,
        },],
      },
      taskWidget: {
        isInTaskWidget: true,
        widgetIcons: [
          {
            id: 0,
            svgId: 1,
            count: 2,
            reset: {
              startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
              cycleTime: 24 * 60 * 60 * 1000,
              ignationIndex: 0.7,
              isIgnition() {
                if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                  return true
                } else return false
              },
              getTimeBeforeDeadline() {
                return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
              },
            }
          },
          {
            id: 1,
            svgId: 3,
            count: 22,
            reset: {
              startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
              cycleTime: 24 * 60 * 60 * 1000,
              ignationIndex: 0.7,
              isIgnition() {
                if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                  return true
                } else return false
              },
              getTimeBeforeDeadline() {
                return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
              },
            }
          },
        ],
      },
      actClock: {
        dailySchedule: {
          isInDailySchedule: true,
          intervals: [
            {
              timeStart: new Date(2022, 6, 19, 23, 0, 0, 0),
              timeEnd: new Date(2022, 6, 19, 7, 0, 0, 0),
            },
            {
              timeStart: new Date(2022, 6, 19, 19, 0, 0, 0),
              timeEnd: new Date(2022, 6, 19, 20, 0, 0, 0),
            },
          ],
        },
        dailyEvent: {
          isInDailyEvent: true,
          icons: [
            {
              svgId: 1,
              hours: 6,
              minutes: 0,
            },
            {
              svgId: 0,
              hours: 18,
              minutes: 0,
            },
          ],
        },
      },
      scheduledActivities: {
        isInScheduledActivities: true,
        bubbles: [{
          id: 0,
          name: 'Meow',
          color: '#5FA3CA',
          svgId: 0,
          totalTime: 60,
          recordedTime: 10,
          reset: {
            startingPoint: new Date(2022, 8, 1, 23, 0, 0, 0),
            cycleTime: 24 * 60 * 60 * 1000,
            ignationIndex: 0.7,
            isIgnition() {
              if ((this.cycleTime * this.ignationIndex) < this.getTimeBeforeDeadline()) {
                return true
              } else return false
            },
            getTimeBeforeDeadline() {
              return (new Date().getTime() - this.startingPoint.getTime()) % this.cycleTime
            },
          },
        },
        ],
      },
    },
    // {
    //   id: 2,
    //   color: '#D25C9C',
    //   isAct: true,
    //   taskList: {
    //     isInTaskList: false,
    //     icons: null,
    //   },
    //   taskWidget: {
    //     isInTaskWidget: true,
    //     icons: [
    //       {
    //         svgId: 4,
    //         hours: null,
    //         minutes: null,
    //       },
    //     ],
    //   },
    //   actClock: {
    //     dailySchedule: {
    //       isInDailySchedule: true,
    //       intervals: [
    //         {
    //           timeStart: new Date(2022, 6, 19, 9, 0, 0, 0),
    //           timeEnd: new Date(2022, 6, 19, 13, 0, 0, 0),
    //         },
    //         {
    //           timeStart: new Date(2022, 6, 19, 14, 0, 0, 0),
    //           timeEnd: new Date(2022, 6, 19, 18, 0, 0, 0),
    //         },
    //       ],
    //     },
    //     dailyEvent: {
    //       isInDailyEvent: true,
    //       icons: [
    //         {
    //           svgId: 4,
    //           hours: 11,
    //           minutes: 0,
    //         },
    //         {
    //           svgId: 2,
    //           hours: 16,
    //           minutes: 30,
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   id: 3,
    //   color: '#7EE4F2',
    //   isAct: true,
    //   taskList: {
    //     isInTaskList: false,
    //     icons: null,
    //   },
    //   taskWidget: {
    //     isInTaskWidget: false,
    //     icons: null,
    //   },
    //   actClock: {
    //     dailySchedule: {
    //       isInDailySchedule: true,
    //       intervals: [
    //         {
    //           timeStart: new Date(2022, 6, 19, 7, 0, 0, 0),
    //           timeEnd: new Date(2022, 6, 19, 8, 0, 0, 0),
    //         },
    //         {
    //           timeStart: new Date(2022, 6, 19, 18, 0, 0, 0),
    //           timeEnd: new Date(2022, 6, 19, 20, 0, 0, 0),
    //         },
    //         {
    //           timeStart: new Date(2022, 6, 19, 21, 0, 0, 0),
    //           timeEnd: new Date(2022, 6, 19, 22, 0, 0, 0),
    //         },
    //       ],
    //     },
    //     dailyEvent: {
    //       isInDailyEvent: true,
    //       icons: [
    //         {
    //           svgId: 1,
    //           hours: 8,
    //           minutes: 0,
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   id: 3,
    //   color: '#7EE4F2',
    //   isAct: true,
    //   actClock: {
    //     isIcon: false,
    //   },
    //   icon: [
    //     {
    //       isInActClock: false,
    //       isInTaskWidget: false,
    //     },
    //   ],
    //   intervals: [
    //     {
    //       timeStart: new Date(2022, 6, 19, 7, 0, 0, 0),
    //       timeEnd: new Date(2022, 6, 19, 8, 0, 0, 0),
    //     },
    //     {
    //       timeStart: new Date(2022, 6, 19, 18, 0, 0, 0),
    //       timeEnd: new Date(2022, 6, 19, 20, 0, 0, 0),
    //     },
    //     {
    //       timeStart: new Date(2022, 6, 19, 21, 0, 0, 0),
    //       timeEnd: new Date(2022, 6, 19, 22, 0, 0, 0),
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   color: 'Aquamarine',
    //   isAct: true,
    //   actClock: {
    //     isIcon: false,
    //   },
    //   icon: [
    //     {
    //       isInActClock: false,
    //       isInTaskWidget: false,
    //     },
    //   ],
    //   intervals: [
    //     {
    //       timeStart: new Date(2022, 6, 19, 8, 0, 0, 0),
    //       timeEnd: new Date(2022, 6, 19, 9, 0, 0, 0),
    //     },
    //     {
    //       timeStart: new Date(2022, 6, 19, 20, 0, 0, 0),
    //       timeEnd: new Date(2022, 6, 19, 23, 0, 0, 0),
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   color: 'PeachPuff',
    //   isAct: true,
    //   actClock: {
    //     isIcon: false,
    //   },
    //   icon: [
    //     {
    //       isInActClock: false,
    //       isInTaskWidget: false,
    //     },
    //   ],
    //   intervals: [
    //     {
    //       timeStart: new Date(2022, 6, 19, 12, 0, 0, 0),
    //       timeEnd: new Date(2022, 6, 19, 15, 0, 0, 0),
    //     },
    //   ],
    // },
    // {
    //    id: 6,
    //    color: 'Ivory',
    //    isAct: true,
    //    intervals: [
    //       {
    //          timeStart: new Date(2022, 6, 19, 19, 0, 0, 0),
    //          timeEnd: new Date(2022, 6, 19, 22, 0, 0, 0),
    //       },
    //    ],
    // },
    // {
    //    id: 7,
    //    color: 'Azure',
    //    isAct: true,
    //    intervals: [
    //       {
    //          timeStart: new Date(2022, 6, 19, 8, 0, 0, 0),
    //          timeEnd: new Date(2022, 6, 19, 10, 0, 0, 0),
    //       },
    //    ],
    // },
    // {
    //   id: 8,
    //   color: 'DarkCyan',
    //   isAct: false,
    //   actClock: {
    //     isIcon: false,
    //   },
    //   icon: [
    //     {
    //       isInActClock: false,
    //       isInTaskWidget: false,
    //     },
    //   ],
    //   intervals: [],
    // },
  ],
}


// class Activity {
//   // constructor(id: number, ) {
//   //   this.id = id
//   // }

//   id = 0
//   color = '#'
//   isAct = false
//   taskList = {
//     isInTaskList: false,
//     icons: null,
//   }
//   taskWidget = {
//     isInTaskWidget: false,
//     icons: null,
//   }
//   actClock = {
//     dailySchedule: {
//       isInDailySchedule: false,
//       intervals: null,
//     },
//     dailyEvent: {
//       isInDailyEvent: false,
//       icons: null,
//     },
//   }
// }

// let data2: DataType = {
//   activity: []
// }

// const addActivity = () => {
//   data2.activity.push(new Activity())
//   console.log(data2);

// }
// addActivity()

// const b: ActivityType = new Activity()

root.render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
