import React from 'react';

import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';
import { ActivityType, TaskType } from '.';

interface TaskContextProps {
  iconsInWidget: ActivityType[]
}

export const TasksContext = React.createContext({} as TaskContextProps);

function App(props: any) {

  // let state = props.getState()

  // let tasks = state.tasks

  // let iconsInWidget = state.activity.filter((el: ActivityType) => {
  //   return el.widget.isInWidget === true
  // })
  // let scheduleInClock = state.activity.filter((el: ActivityType) => {
  //   return el.actClock.dailySchedule.isInDailySchedule === true
  // })
  // let iconsInClock = state.activity.filter((el: ActivityType) => {
  //   return el.actClock.dailyEvent.isInDailyEvent === true
  // })


  // importStoreFromLS() 

  return (
    <div className="App">
      <CurDate />
      {/* <Clock scheduleActs={scheduleInClock} iconsActs={iconsInClock} /> */}
      {/* <TasksContext.Provider value={{iconsInWidget}}> */}
        <Tasks />
      {/* </TasksContext.Provider> */}
      {/* <Bubbles activity={state.activity} /> */}
    </div>
  );
}

export default App;
