import React from 'react';
import { useSelector } from 'react-redux';
import { ActivityType, BubbleType } from '../..';
import { RootState } from '../../redux/store';
import Bubble from './Bubble';
import './Bubbles.css'


function Bubbles () {

   let activities = useSelector((state: RootState) => state.activity.activity.filter(
      act => act.scheduledActivities.bubbles !== null))

   return (
      <div className='Bubbles block'>
         {activities.map((act: ActivityType) => (
            act.scheduledActivities.bubbles?.map((bubble: BubbleType) => (
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

export default Bubbles
