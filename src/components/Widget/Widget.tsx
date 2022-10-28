import React from 'react';
import { ActivityType, WidgetIconsType } from '../..';
import Icon from '../Icons/Icon';
import './Widget.css'



type Props = {
   iconsActs: ActivityType[],
}

function Widget(props: Props) {
   let printIcon = (act: ActivityType, icon: WidgetIconsType) => {
      if (icon.currentAmount > 0) {
         return <div className='Widget_Icon' key={icon.id}>
            <button className='Widget_button'>
               <div className='Widget_text' >{icon.currentAmount}</div>
               <Icon width={'20'} height={'20'} color={act.color} svgId={icon.svgId} />
            </button>
         </div>
      }
   }

   return (
      <div className='Widget'>
         {
            props.iconsActs.map((act: ActivityType, id: number) => (
               act.widget.widgetIcons?.map((icon: WidgetIconsType) => (
                  printIcon(act, icon)
               ))
            ))}
      </div>
   )


}


// class Widget extends React.Component<StateType, any> {
//    timerID: any;
//    constructor(props: StateType) {
//       super(props);
//       this.state = {
//          acts: this.props.activity.filter((el: ActivityType) => { return el.widget.isInWidget === true })
//       };
//    }

//    render() {
//       return (
//          <div className='Widget block'>
//             {
//                this.state.acts.map((act: ActivityType, id: number) => (
//                   act.widget.widgetIcons?.map((icon: WidgetIconsType) => (
//                      <div className='Widget_Icon' key={icon.id}>
//                         <Icon width={'20'} height={'20'} color={act.color} rotateZ={'0'} svgId={icon.svgId} />
//                         <div className='Widget_text' >{icon.currentAmount}</div>
//                      </div>
//                   ))
//                ))}
//          </div>
//       )
//    }
// }

export default Widget