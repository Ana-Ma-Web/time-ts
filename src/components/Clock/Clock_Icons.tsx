import React from 'react';
import { ActivityType, DataType, IconsType, IconTimeType } from '../..';
import Icon from '../Icons/Icon'

class ClockIcons extends React.Component<DataType, any> {

   constructor(props: DataType) {
      super(props);
      this.state = {};
   }

   countRotate(hours: IconTimeType, minutes: IconTimeType) {
      if ((hours !== null) && (minutes !== null)) {
         return hours * 15 + minutes * 0.25
      }
   }

   printIcons(act: ActivityType) {
      if (act.actClock.dailyEvent.icons) {
         let result = act.actClock.dailyEvent.icons.map((item: IconsType, id: number) => (
            <div key={id} className='icon' style={{
               transform: `rotateZ(${this.countRotate(item.hours, item.minutes)}deg)`
            }}>
               <Icon key={id} width={'20'} height={'20'}
               color={act.color} svgId={item.svgId}
                  rotateZ={`rotateZ(-${this.countRotate(item.hours, item.minutes)}deg)`}></Icon>
            </div>
         ))
         return result
      }
      return <div>1</div>
   }

   render() {
      return (
         this.props.activity.map((act: ActivityType, id: number) => (
            <div className="Clock__icons" key={id}>
               {
                  <div>{this.printIcons(act)}</div>
               }
            </div>
         ))
      )
   }
}

export default ClockIcons