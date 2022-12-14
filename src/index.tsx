import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme';
import { CssBaseline } from '@mui/material';

import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export type IconTimeType = number | null
export type IconsType = {
  id: number,
  name: string,
  hours: IconTimeType,
  minutes: IconTimeType,
}
export type TaskType = {
  date: number,
  isDone: boolean,
  isLineThrough: boolean,
  isExpanded: boolean,
  color: string,
  name: string,
  description: string,
  reset: ResetType | null,
  childrens: TaskType[] | null,
}
export type WidgetIconsType = {
  id: number,
  name: string,
  totalIntervalAmount: number,
  currentAmount: number,
  dailyEventIcons: IconsType[] | null,

  reset: ResetType,
}
export type WidgetType = {
  widgetIcons: Array<WidgetIconsType> | null,
}
export type IntervalType = null | number
export type IntervalsType = {
  timeStart: IntervalType,
  timeEnd: IntervalType,
}
export type DailyScheduleType = {
  intervals: Array<IntervalsType> | null
}
export type DailyEventType = {
  icons: Array<IconsType> | null
}
export type ActClockType = {
  dailySchedule: DailyScheduleType,
  dailyEvent: DailyEventType,
}
export type ResetType = {
  startingPoint: number
  cycleTime: number
  ignationIndex: number
}
export type BubbleType = {
  id: number
  name: string
  svgId: number
  totalTime: number
  recordedTime: number
  reset: ResetType
  color: string
}
export type ScheduledActivitiesType = {
  bubbles: BubbleType[] | null
}
export type ActivityType = {
  id: number
  name: string
  description: string
  color: string
  isAct: boolean
  widget: WidgetType
  actClock: ActClockType
  scheduledActivities: ScheduledActivitiesType
  taskIds: number[] | null
}
export type WidgetActChangeType = (actId: number, widgetIconId: number) => void
export type ObserverType = (state: StateType) => void
export type ActionType = {
  type: string
  actId?: number
  widgetIconId?: number
}
type StateType = {
  tasks: TaskType[],
  activity: ActivityType[],
  addTaskValue: string,
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

