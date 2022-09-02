import React from 'react';
import { ActivityType, DataType } from '../..';
import './Clock.css';
import Acts from './Clock_Acts';
import ClockIcons from './Clock_Icons';
import clockImg from './img/clock.svg'

type State = {
   date: Date,
}

class Clock extends React.Component<DataType, State> {
   timerID: any;
   constructor(props: DataType) {
      super(props);
      this.state = {
         date: new Date(),
      };
   }

   componentDidMount() {
      this.timerID = setInterval(() => this.arrowUpdate(), 60000);
   }

   arrowUpdate() {
      this.setState({
         date: new Date()
      });
   }

   render() {
      return (
         <div className="Clock block">
            <img src={clockImg} className='Clock__img' alt="clock" />
            <Acts activity={this.props.activity.filter((el: ActivityType) => { return el.actClock.dailySchedule.isInDailySchedule === true })} />
            <div className="Clock__arrow" style={{
               transform: `rotateZ(${(
                  (this.state.date.getHours() * 15) +
                  (this.state.date.getMinutes() * 0.25) +
                  180)}deg)`
            }}>
            </div>
            <ClockIcons activity={this.props.activity.filter((el: ActivityType) => { return el.actClock.dailyEvent.isInDailyEvent === true })} />
         </div>
      )
   }
}

export default Clock