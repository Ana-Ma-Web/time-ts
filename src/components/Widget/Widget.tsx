import React from 'react';
import { useDispatch } from 'react-redux';
import { ActivityType, WidgetIconsType } from '../..';
import { decWidgetCounter } from '../../redux/slices/activitySlice';
import Icon from '../Icons/Icon';
import './Widget.css'



type Props = {
   iconsActs: ActivityType[],
}

function Widget(props: Props) {
   const dispatch = useDispatch()

   const decrement = (actId: number, iconId: number) => {
      dispatch(decWidgetCounter({actId, iconId}))
   }

   let printIcon = (act: ActivityType, icon: WidgetIconsType) => {
      if (icon.currentAmount > 0) {
         return <div className='Widget_Icon' key={icon.id}>
            <button className='Widget_button'
            onClick={() => decrement(act.id, icon.id)}>
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

export default Widget