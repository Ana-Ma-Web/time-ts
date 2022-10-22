import React from 'react';
import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';
import { ActivityType, importStoreFromLS, TaskType, addTask, completeTask } from '.';


interface TaskContextProps {
  tasks: TaskType[]
  iconsInWidget: ActivityType[]
  completeTask: (date: number) => void
  addTask: (task: TaskType) => void
}

export const TasksContext = React.createContext({} as TaskContextProps);


function App(props: any) {

  let state = props.getState()

  let tasks = state.tasks
  // let completeTask = props.completeTask

  let iconsInWidget = state.activity.filter((el: ActivityType) => {
    return el.widget.isInWidget === true
  })
  let scheduleInClock = state.activity.filter((el: ActivityType) => {
    return el.actClock.dailySchedule.isInDailySchedule === true
  })
  let iconsInClock = state.activity.filter((el: ActivityType) => {
    return el.actClock.dailyEvent.isInDailyEvent === true
  })


  importStoreFromLS() 

  return (
    <div className="App">
      <CurDate />
      <Clock scheduleActs={scheduleInClock} iconsActs={iconsInClock} />
      <TasksContext.Provider value={{tasks, iconsInWidget, completeTask, addTask}}>
        <Tasks />
      </TasksContext.Provider>
      <Bubbles activity={state.activity} />
    </div>
  );
}

export default App;
