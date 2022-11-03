import React from 'react';

import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';
import { ActivityType } from '.';

interface TaskContextProps {
  iconsInWidget: ActivityType[]
}

export const TasksContext = React.createContext({} as TaskContextProps);

function App(props: any) {

  return (
    <div className="App">
      <CurDate />
      <Clock />
      <Tasks />
      <Bubbles />
    </div>
  );
}

export default App;
