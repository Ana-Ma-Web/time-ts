import React from 'react';
import './App.css';
import CurDate from "./components/Cur_date/CurDate";
import Clock from "./components/Clock/Clock";
// import { ActivityType, DataType } from '.';

// type Props = {
//   activity: ActivityType[]
// }


function App(props: any) {

  return (
    <div className="App">
      <CurDate/>
      <Clock {...props}/>
    </div>
  );
}

export default App;
