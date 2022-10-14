import React from 'react';
import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';
import { ActivityType } from '.';



function App(props: any) {

  let iconsInWidget = props.activity.filter((el: ActivityType) => {
    return el.widget.isInWidget === true
  })
  let scheduleInClock = props.activity.filter((el: ActivityType) => {
    return el.actClock.dailySchedule.isInDailySchedule === true
  })
  let iconsInClock = props.activity.filter((el: ActivityType) => {
    return el.actClock.dailyEvent.isInDailyEvent === true
  })

  return (
    <div className="App">
      <CurDate />
      <Clock scheduleActs={scheduleInClock} iconsActs={iconsInClock} />
      <Tasks tasks={props.tasks} iconsActs={iconsInWidget}/>
      <Bubbles activity={props.activity} />
    </div>
  );
}

export default App;
