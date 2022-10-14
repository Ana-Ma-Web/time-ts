import React from 'react';
import { ActivityType, BubbleType } from '../..';
import Bubble from './Bubble';
import './Bubbles.css'

type Props = {
   activity: ActivityType[],
}

class Bubbles extends React.Component<Props, any> {
   constructor(props: Props){
      super(props);
      this.state = {
         acts: this.props.activity.filter((el: ActivityType) => {return el.scheduledActivities.isInScheduledActivities === true})
      }
   }

   render(){
      return (
         <div className='Bubbles block'>
            {this.state.acts.map((act: ActivityType) => (
               act.scheduledActivities.bubbles.map((bubble: BubbleType) => (
                  <Bubble 
                  color={bubble.color} 
                  svgId={bubble.svgId}
                  totalTime={bubble.totalTime} 
                  recordedTime={bubble.recordedTime} 
                  reset={bubble.reset} 
                  key={bubble.id}/>
               ))
            ))}
         </div>
      )
   }
}

export default Bubbles
