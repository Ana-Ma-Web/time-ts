import React from 'react';
import './App.css';
import CurDate from "./components/Cur_date/CurDate";
import Clock from "./components/Clock/Clock";
import Widget from './components/Widget/Widget';
import Tasks from './components/Tasks/Tasks';

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
    </div>
  );
}

export default App;
