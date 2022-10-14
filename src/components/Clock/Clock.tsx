import React from 'react';
import { ActivityType } from '../..';
import './Clock.css';
import Acts from './Clock_Acts';
import ClockIcons from './Clock_Icons';
import clockImg from './img/clock.svg'

type State = {
   date: Date,
}

type Props = {
   scheduleActs: ActivityType[]
   iconsActs: ActivityType[]
}

class Clock extends React.Component<Props, State> {
   timerID: any;
   constructor(props: Props) {
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
            <img src={clockImg} className='Clock_img' alt="clock" />
            <Acts activity={this.props.scheduleActs} />
            <div className="Clock_arrow" style={{
               transform: `rotateZ(${(
                  (this.state.date.getHours() * 15) +
                  (this.state.date.getMinutes() * 0.25) +
                  180)}deg)`
            }}>
            </div>
            <ClockIcons activity={this.props.iconsActs} />
         </div>
      )
   }
}

export default Clock