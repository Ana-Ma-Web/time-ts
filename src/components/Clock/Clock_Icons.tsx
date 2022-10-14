import React from 'react';
import { ActivityType, IconsType, IconTimeType } from '../..';
import Icon from '../Icons/Icon'

type Props = {
   activity: ActivityType[]
}
class ClockIcons extends React.Component<Props, any> {

   constructor(props: Props) {
      super(props);
      this.state = {};
   }

   countRotate(hours: IconTimeType, minutes: IconTimeType) {
      if ((hours !== null) && (minutes !== null)) {
         return (hours * 15 + minutes * 0.25) + 273.5
      }
   }

   printIcons(act: ActivityType) {
      if (act.actClock.dailyEvent.icons) {
         let result = act.actClock.dailyEvent.icons.map((item: IconsType, id: number) => (
            <div key={id} className='Clock_iconWrapper' style={{
               transform: `rotateZ(${this.countRotate(item.hours, item.minutes)}deg)`
            }}>
               <button className='Clock_iconButton' style={{
                  transform: `rotateZ(-${this.countRotate(item.hours, item.minutes)}deg)`
               }}>
                  <Icon key={id} width={'20'} height={'15'}
                     color={act.color} svgId={item.svgId}></Icon>
               </button>
            </div>
         ))
         return result
      }
   }

   render() {
      return (
         this.props.activity.map((act: ActivityType, id: number) => (
            <div className="Clock_icons" key={id}>
               {
                  this.printIcons(act)
               }
            </div>
         ))
      )
   }
}

export default ClockIcons