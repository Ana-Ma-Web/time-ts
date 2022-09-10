import React from 'react';
import { ActivityType, DataType, WidgetIconsType } from '../..';
import Icon from '../Icons/Icon';
import './Widget.css'



class Widget extends React.Component<DataType, any> {
   timerID: any;
   constructor(props: DataType) {
      super(props);
      this.state = {
         acts: this.props.activity.filter((el: ActivityType) => { return el.taskWidget.isInTaskWidget === true })
      };
   }

   render() {
      return (
         <div className='Widget block'>
            {
               this.state.acts.map((act: ActivityType, id: number) => (
                  act.taskWidget.widgetIcons?.map((icon: WidgetIconsType) => (
                     <div className='Widget_Icon' key={icon.id}>
                        <Icon width={'40'} height={'40'} color={act.color} rotateZ={'0'} svgId={icon.svgId} />
                        <div className='Widget_text' >{icon.count}</div>
                     </div>
                  ))
               ))}
         </div>
      )
   }
}

export default Widget