import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Icons.module.css'
import { ActivityType, IconTimeType } from '../../..';
import { RootState } from '../../../redux/store';
import Icon from '../../Icons/Icon'

function ClockIcons() {

   const iconsActs = useSelector((state: RootState) => state.activity.activity).filter(
      activity => activity.actClock.dailyEvent.icons !== null
   )

   const countRotate = (hours: IconTimeType, minutes: IconTimeType) => {
      if ((hours !== null) && (minutes !== null)) {
         return (hours * 15 + minutes * 0.25) + 273.5
      }
   }

   const printIcons = (act: ActivityType) => {
      if (act.actClock.dailyEvent.icons) {
         let result = act.actClock.dailyEvent.icons.map(
            (item) => (
               <div key={item.id} className={styles.wrapper} style={{
                  transform: `rotateZ(${countRotate(item.hours, item.minutes)}deg)`
               }}>
                  <button className={styles.button} style={{
                     transform: `rotateZ(-${countRotate(item.hours, item.minutes)}deg)`
                  }}>
                     <Icon key={item.id} width={'20'} height={'15'}
                        color={act.color} svgId={item.svgId}></Icon>
                  </button>
               </div>
            ))
         return result
      }
   }

   return (
      <>
         {iconsActs.map((act: ActivityType, id: number) => (
            <div className={styles.Icons} key={act.id}>
               {
                  printIcons(act)
               }
            </div>
         ))}
      </>
   )
}

export default ClockIcons