import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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

  totalIntervalAmount: number,
  currentAmount: number,

  decrementCounter: Function,
  incrementCounter: Function,
  reset: ResetType,
}
export type WidgetType = {
  isInWidget: boolean,
  widgetIcons: Array<WidgetIconsType> | null,
}
export type IntervalType = Date | null | string
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
  widget: WidgetType,
  actClock: ActClockType,
  scheduledActivities: ScheduledActivitiesType,
}
export type StateType = {
  tasks: TaskType[],
  activity: ActivityType[],
}
export type WidgetActChangeType = (actId: Number, widgetIconId: Number) => void
export type ObserverType = (state: StateType) => void
export type ActionType = {
  type: String
  actId?: Number
  widgetIconId?: Number
}
export type DispatchType = (action: ActionType) => void
export type StoreType = {
  _state: StateType
  getState: () => StateType
}

let store: StoreType = {
  _state: {
    tasks: [{
      id: 1,
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
        id: 2,
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
      id: 4,
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

    activity: [
      {
        id: 0,
        color: '#5FA3CA',
        isAct: true,
        widget: {
          isInWidget: true,
          widgetIcons: [
            {
              id: 0,
              svgId: 1,
              totalIntervalAmount: 2,
              currentAmount: 2,
              decrementCounter() {
                this.currentAmount--
              },
              incrementCounter() {
                this.currentAmount++
              },
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
              totalIntervalAmount: 22,
              currentAmount: 22,
              decrementCounter() {
                this.currentAmount--
              },
              incrementCounter() {
                this.currentAmount++
              },
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
                svgId: 3,
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
            svgId: 10,
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
    ],
  },
  getState() {
    return this._state
  },
}


root.render(
  <React.StrictMode>
    <App {...store.getState()} />
  </React.StrictMode>
);

