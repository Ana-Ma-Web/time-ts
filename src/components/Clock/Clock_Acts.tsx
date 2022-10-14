import React from 'react';
import { ActivityType, IntervalsType, IntervalType } from '../..';

type Props = {
   activity: ActivityType[]
}
class Acts extends React.Component<Props, any>{
   constructor(props: Props) {
      super(props);
      this.state = {}
   }

   countActsRad() {
      const actsAmount = this.props.activity.length;
      let radMax = 85;
      let radGap = (radMax / actsAmount)
      let radArr = [];
      for (let r = radMax; r > 0.1; r = (r - radGap)) {
         radArr.push(r);
      }
      return radArr
   }

   countActsStart(timeStart: IntervalType, timeEnd: IntervalType) {
      if (timeStart && timeEnd) {

         let timeStartDate = new Date(timeStart)
         let timeEndDate = new Date(timeEnd)

         let radStart = timeStartDate.getHours() * 15 + timeEndDate.getMinutes() * 0.25 + 270
         return radStart
      }
   }


   countActsLength(timeStart: IntervalType, timeEnd: IntervalType, actRad: number) {
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

   printDasharray(intervals: Array<IntervalsType>, actId: number) {
      let actRad = this.countActsRad()[(actId)]
      let intervalLength = ''
      let lastEnd: IntervalType | undefined

      for (let key in intervals) {
         let start = intervals[key].timeStart
         let end = intervals[key].timeEnd
         if (lastEnd) {
            let previousDowntimeLength = this.countActsLength(lastEnd, start, actRad)
            intervalLength += ' ' + previousDowntimeLength
         }
         intervalLength += ' ' + this.countActsLength(start, end, actRad)
         lastEnd = end
      }

      return intervalLength
   }

   printSvg(act: ActivityType, id: number) {
      if (act.actClock.dailySchedule.intervals) {
         return <svg viewBox='0 0 290 268' className='Clock_circle'
            style={{
               transform: `rotateZ(${this.countActsStart(
                  act.actClock.dailySchedule.intervals[0].timeStart, 
                  act.actClock.dailySchedule.intervals[0].timeEnd
                  )}deg)`
            }}
         >
            {this.printCircle(act, id)}
         </svg>
      }
   }

   printCircle(act: ActivityType, id: number) {
      if (act.actClock.dailySchedule.intervals) {
         return <circle r={this.countActsRad()[id]} cx="50%" cy="50%" fill="none"
            stroke={act.color}
            strokeWidth='8'
            strokeDasharray={
               this.printDasharray(act.actClock.dailySchedule.intervals, id) + ' 1000'
            }
            strokeLinecap="round"
         ></circle>
      }
   }

   render() {
      return (
         <div className="Clock_acts">
            {
               this.props.activity.map((act: ActivityType) => (
                  <div key={act.id}>
                     {this.printSvg(act, act.id)}
                  </div>
               ))
            }
         </div>
      )
   }
}

export default Acts;