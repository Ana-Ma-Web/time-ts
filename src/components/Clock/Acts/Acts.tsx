import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Acts.module.css';
import { ActivityType, IntervalsType, IntervalType } from '../../..';
import { RootState } from '../../../redux/store';

function Acts () {

   let scheduleActs = useSelector((state: RootState) => state.activity.activity).filter(
      activity => activity.actClock.dailySchedule.intervals !== null
   )

   const countActsRad = () => {
      const actsAmount = scheduleActs.length;
      let radMax = 85;
      let radGap = (radMax / actsAmount)
      let radArr = [];
      for (let r = radMax; r > 0.1; r = (r - radGap)) {
         radArr.push(r);
      }
      return radArr
   }

   const countActsStart = (timeStart: IntervalType, timeEnd: IntervalType) => {
      if (timeStart && timeEnd) {

         let timeStartDate = new Date(timeStart)
         let timeEndDate = new Date(timeEnd)

         let radStart = timeStartDate.getHours() * 15 + timeEndDate.getMinutes() * 0.25 + 270
         return radStart
      }
   }

   const countActsLength = (timeStart: IntervalType, timeEnd: IntervalType, actRad: number) => {
      if (timeStart && timeEnd) {

         let timeStartDate = new Date(timeStart)
         let timeEndDate = new Date(timeEnd)


         let duration = timeEndDate.getTime() - timeStartDate.getTime()
         let curLengthPart = (2 * 3.14 * actRad / 100)
         let curLengthAct = curLengthPart * (duration / 1000 / 60 * 695 / 10000)

         if (timeStartDate.getHours() > timeEndDate.getHours()) {
            curLengthAct = curLengthPart * (duration / 1000 / 60 * 695 / 10000) + curLengthPart * 100
         }

         return curLengthAct
      }
   }

   const countDasharray = (intervals: Array<IntervalsType>, actId: number) => {
      let actRad = countActsRad()[(actId)]
      let intervalLength = ''
      let lastEnd: IntervalType | undefined

      for (let key in intervals) {
         let start = intervals[key].timeStart
         let end = intervals[key].timeEnd
         if (lastEnd) {
            let previousDowntimeLength = countActsLength(lastEnd, start, actRad)
            intervalLength += ' ' + previousDowntimeLength
         }
         intervalLength += ' ' + countActsLength(start, end, actRad)
         lastEnd = end
      }

      return intervalLength
   }

   const printSvg = (act: ActivityType, id: number) => {
      if (act.actClock.dailySchedule.intervals) {
         return <svg viewBox='0 0 290 268' className={styles.circle}
            style={{
               transform: `rotateZ(${countActsStart(
                  act.actClock.dailySchedule.intervals[0].timeStart, 
                  act.actClock.dailySchedule.intervals[0].timeEnd
                  )}deg)`
            }}
         >
            {printCircle(act, id)}
         </svg>
      }
   }

   const printCircle = (act: ActivityType, id: number) => {
      if (act.actClock.dailySchedule.intervals) {
         return <circle r={countActsRad()[id]} cx="50%" cy="50%" fill="none"
            stroke={act.color}
            strokeWidth='8'
            strokeDasharray={
               countDasharray(act.actClock.dailySchedule.intervals, id) + ' 1000'
            }
            strokeLinecap="round"
         ></circle>
      }
   }

   return (
      <div className={styles.Acts}>
         {
            scheduleActs.map((act: ActivityType) => (
               <div key={act.id}>
                  {printSvg(act, act.id)}
               </div>
            ))
         }
      </div>
   )
}

export default Acts;