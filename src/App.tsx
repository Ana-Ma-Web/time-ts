import React from 'react';
import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Widget from './components/Widget/Widget';
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';

// import { ActivityType, DataType } from '.';

// type Props = {
//   activity: ActivityType[]
// }


function App(props: any) {

  return (
    <div className="App">
      <CurDate/>
      <Widget {...props}/>
      <Clock {...props}/>
      <Tasks {...props}/>
      <Bubbles {...props}/>
    </div>
  );
}

export default App;
